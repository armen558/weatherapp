import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: '',
    hourlyData: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_HOURLY_DATA_START:
            return {
                ...state, 
                loading: true
            };
        case actionTypes.FETCH_HOURLY_DATA_SUCCESS:
            return {
                ...state,
                hourlyData: action.payload,
                loading: false,
                error: ''
            };
        case actionTypes.FETCH_HOURLY_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                hourlyData: [],
                loading: false,
            };
        default:
            return state;
    };
};

export default reducer;