import {combineReducers} from 'redux';
import {weatherReducer} from './weatherReducer';
import {selectDayReducer} from "./selectDayReducer";
import {currentWeatherReducer} from "./currentWeatherReducer";


export default combineReducers({
    weatherReducer,
    selectDayReducer,
    currentWeatherReducer,
})
