import React, {Component} from 'react';

import './weatherList.css';
import day from '../../images/erevan_day.jpg'
import {connect} from "react-redux";
import {fetchCurrentWeather, fetchWeatherList} from "../../store/actions";
import SingleDayForecast from "../singleDayForecast/singleDayForecast";


const API_KEY = 'e9cfdf3fde320d83a0c2ac52485a0d03';
const URL = `http://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=${API_KEY}&units=metric`;


const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=${API_KEY}&units=metric`

class WeatherList extends Component {


    async componentDidMount() {
        await this.props.fetchWeatherList(URL);
        await this.props.fetchCurrentWeather(CURRENT_WEATHER_URL);

    }


    render() {

        const {loading} = this.props;
        const {currentWeather} = this.props;


        return (
            <div className={'weather_body'}>
                <div className={'country'}>
                    <img src={day} alt="img"/>
                    <div className={'img-overlay'}/>
                    <div className={'current_day_weather_container'}>
                        {currentWeather ?
                            <div className={'info'}>
                                <div className={'curent_temp'}>
                                    {`${currentWeather.data.main.temp.toString().split('.')[0]}\u2103`}
                                </div>
                                <div className={'clouds'}>{currentWeather.data.weather[0].description}</div>

                                <div className={'humid'}>
                                    <div className={'humid_items'}>
                                        <p>Humidity</p>
                                        <div>{currentWeather.data.main.humidity} %</div>
                                    </div>
                                    <div className={'devider'}/>
                                    <div className={'humid_items'}>
                                        <p>Wind</p>
                                        <div>{currentWeather.data.wind.speed} km/h</div>
                                    </div>
                                </div>
                            </div>
                            : 'Loading...'}
                            <div className={'today_time'}>
                                <div className={'city_name'}>Yerevan</div>
                                <div>{new Date().toISOString().slice(0, 10)}</div>
                                <div className={'city_name'}>Today</div>
                            </div>
                    </div>
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

        const nightData = this.props.weatherList && this.props.weatherList.filter(item =>
            item.dt_txt.split(' ').pop().split(':')[0] === '00');

        return (
            nightData && nightData.map(item => {
                return (
                    <SingleDayForecast key={item.dt} item={item}/>
                )
            })
        )
    };


}

const mapStateToProps = state => {
    return {
        currentWeather: state.currentWeatherReducer.currentWeather,
        weatherList: state.weatherReducer.weatherList,
        loading: state.weatherReducer.loading,
        error: state.weatherReducer.error,
    }
};


export default connect(mapStateToProps, {fetchWeatherList, fetchCurrentWeather})(WeatherList);
