import * as types from '../types'

import axios from 'axios';


export const fetchWeatherList = (url) => {
    return async dispatch => {

        dispatch(fetchWeatherListStart());

        try {
            const response = await axios.get(url);

            dispatch(fetchWeatherListSuccess(response.data.list));
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


export const selectDay = day => {

    return {
        type: types.DAY_SELECTED,
        day
    }
};


export const fetchCurrentWeather = (url) => async dispatch => {
    const response = await axios.get(url);
    dispatch({
        type: types.FETCH_CURRENT_WEATHER,
        response
    })
};