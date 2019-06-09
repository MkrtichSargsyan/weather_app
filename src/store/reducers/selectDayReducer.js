import * as types from '../types';


const initialState = {
    selectedDay: null,
};


export const selectDayReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.DAY_SELECTED:
            return {
                ...state,
                selectedDay: action.day
            };

        default :
            return state;
    }
};
