import React, {Component} from 'react';

import './singleDayForecast.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectDay} from "../../store/actions";


class SingleDayForecast extends Component {


    render() {
        const {item} = this.props;
        let date = new Date(item.dt_txt.split(' ')[0]).toString();
        let dayName = date.split(' ')[0];
        const iconUrl = "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png";

        return (
            <Link onClick={() => this.props.selectDay(item.dt_txt)} to={`forecast/${dayName}`}>
                <div className={'singleDayContainer'}>
                    <div>{item.dt_txt.split(' ')[0]}</div>
                    <div>{dayName}</div>
                    <img src={iconUrl} alt="img" className={'icon'}/>
                    <div className={'temp'}>
                        <div>{`${item.main.temp_max}\u2103`}</div>
                        <div style={{color: '#6b6b6b'}}>{`${item.main.temp_min}\u2103`}</div>
                    </div>
                </div>
            </Link>
        );
    }

}


export default connect(null, {selectDay})(SingleDayForecast);
