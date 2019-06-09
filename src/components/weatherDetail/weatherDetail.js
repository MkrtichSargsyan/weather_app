import React from 'react';
import './weatherDetail.css';
import {connect} from "react-redux";
import {fetchWeatherList} from "../../store/actions";


const WeatherDetail = ({selectedDay, weatherList}) => {
    const selectedDayWeather = weatherList.filter(item => {
        return item.dt_txt.split(' ')[0] === selectedDay.split(' ')[0]
    });

    console.log(selectedDayWeather);

    return (
        <>
            <div className={'selDay'}>{selectedDayWeather[0].dt_txt.split(' ')[0]}</div>
            <div className={'container'}>
                {selectedDayWeather.map(item => {
                    return (
                        <div key={item.dt} className={'mini_container'}>
                            <div>{item.dt_txt.split(' ').pop()}</div>
                            <div>max-temp :{item.main.temp_max}</div>
                            <div>min-temp :{item.main.temp_min}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};


const mapStateToProps = state => {
    return {
        selectedDay: state.selectDayReducer.selectedDay,
        weatherList: state.weatherReducer.weatherList
    }
};


export default connect(mapStateToProps, {fetchWeatherList})(WeatherDetail);
