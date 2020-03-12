import * as actionTypes from './actionTypes';
import { getWeatherData, getLocationKey } from '../../service/helperFunctions';

export const fetchLocationKeySuccess = (data) => {
    return {
        type: actionTypes.FETCH_LOCATION_KEY_SUCCESS,
        payload: data
    };
};

export const fetchLocationKeyFail = (err) => {
    return {
        type: actionTypes.FETCH_LOCATION_KEY_FAIL,
        payload: err
    };
};

export const fetchLocationKey = (city) => {
    return dispatch => {
        getLocationKey(city)
            .then(resp => dispatch(fetchLocationKeySuccess(resp.data[0].Key)))
            .catch(err => dispatch(fetchLocationKeyFail(err)))
    }
};

export const fetchWeatherDataStart = (data) => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_START,
    };
};

export const fetchWeatherDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
        payload: data
    };
};

export const fetchWeatherDataFail = (err) => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_FAIL,
        payload: err
    };
};

export const fetchWeatherData = (key) => {
    return dispatch => {
        getWeatherData(key)
            .then(resp => dispatch(fetchWeatherDataSuccess(resp.data)))
            .catch(err => dispatch(fetchWeatherDataFail(err)))
    }
};