import * as actionTypes from '../actions/actionTypes';

const initialState = {
    locationKey: '',
    weatherData: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_LOCATION_KEY_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                locationKey: action.payload
            };
        case actionTypes.FETCH_LOCATION_KEY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
            };
        case actionTypes.FETCH_WEATHER_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    };
};

export default reducer;