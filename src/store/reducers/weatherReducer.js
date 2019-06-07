import * as types from '../types';


const initialState = {
    weatherList: null,
    loading: false,
    error: null,
    selectedDay: null,
};


export const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_WEATHER_LIST_START:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_WEATHER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                weatherList: action.weatherList
            };
        case types.FETCH_WEATHER_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default :
            return state;
    }
};
