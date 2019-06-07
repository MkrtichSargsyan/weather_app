import * as types from '../types'

import axios from 'axios';


export const fetchWeatherList = (url) => {
    return async dispatch => {

        dispatch(fetchWeatherListStart());

        try {
            const response = await axios.get(url);
            // console.log(response.data.list);
            const dataToDispatch = response.data.list.filter(item =>
                item.dt_txt.split(' ').pop().split(':')[0] === '00');

            dispatch(fetchWeatherListSuccess(dataToDispatch))
        } catch (e) {
            dispatch(fetchWeatherListError(e))
        }
    }
};


const fetchWeatherListStart = () => {
    return {
        type: types.FETCH_WEATHER_LIST_START
    }
};

const fetchWeatherListSuccess = (weatherList) => {
    return {
        type: types.FETCH_WEATHER_LIST_SUCCESS,
        weatherList,
    }
};

const fetchWeatherListError = (e) => {
    return {
        type: types.FETCH_WEATHER_LIST_ERROR,
        error: e
    }
};