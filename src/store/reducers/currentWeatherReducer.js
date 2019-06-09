import * as types from '../types';


const initialState = {
    currentWeather: null,
};


export const currentWeatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.response
            };
        default :
            return state;
    }
};
