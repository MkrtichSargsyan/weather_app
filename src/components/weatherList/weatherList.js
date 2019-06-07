import React, {Component} from 'react';

import './weatherList.css';
import day from '../../images/erevan_day.jpg'
import {connect} from "react-redux";
import {fetchWeatherList} from "../../store/actions";
import SingleDayForecast from "../singleDayForecast/singleDayForecast";


const API_KEY = 'e9cfdf3fde320d83a0c2ac52485a0d03';
const URL = `http://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=${API_KEY}&units=metric`;

class WeatherList extends Component {


    async componentDidMount() {
        await this.props.fetchWeatherList(URL);
    }


    render() {

        const {loading} = this.props;

        return (
            <div>
                <div className={'country'}>
                    <img src={day} alt="img"/>
                </div>

                {loading ?
                    <span style={{color: 'black'}}>Loading...</span> :
                    <div className={'weather_list'}>
                        {this.renderWeathers()}
                    </div>}
            </div>
        );
    }

    renderWeathers = () => {
        return (
            this.props.weatherList && this.props.weatherList.map(item=>{
                return (
                    <SingleDayForecast key={item.dt} item={item}/>
                )
            })
        )
    };


}

const mapStateToProps = state => {
    return {
        weatherList: state.weatherReducer.weatherList,
        loading: state.weatherReducer.loading,
        error: state.weatherReducer.error,
    }
};


export default connect(mapStateToProps, {fetchWeatherList})(WeatherList);
