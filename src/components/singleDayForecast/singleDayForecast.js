import React from 'react';
import './singleDayForecast.css';

const SingleDayForecast = ({item}) => {
    const iconUrl = "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
    console.log(item);
    return (
        <div className={'singleDayContainer'}>
            <div>{item.dt_txt}</div>
            <img src={iconUrl} alt="img" className={'icon'}/>
            <div className={'temp'}>
                <div>{`${item.main.temp_max}\u2103`}</div>
                <div style={{color:'#6b6b6b'}}>{`${item.main.temp_min}\u2103`}</div>
            </div>
        </div>
    );
};

export default SingleDayForecast;
