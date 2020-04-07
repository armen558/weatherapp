import * as actionTypes from './actionTypes';
import { getWeatherData, getLocationKey } from '../../service/helpers';

const fetchLocationKeyStart = () => {
    return {
        type: actionTypes.FETCH_LOCATION_KEY_START
    };
};

const fetchLocationKeySuccess = (data) => {
    return {
        type: actionTypes.FETCH_LOCATION_KEY_SUCCESS,
        payload: data
    };
};

const fetchLocationKeyFail = (err) => {
    return {
        type: actionTypes.FETCH_LOCATION_KEY_FAIL,
        payload: err
    };
};

export const fetchLocationKey = (city) => {
    return dispatch => {
        dispatch(fetchLocationKeyStart());
        getLocationKey(city)
            .then(resp => {
                resp.data.length !== 0 
                    ? dispatch(fetchLocationKeySuccess(resp.data[0])) 
                    : dispatch(fetchLocationKeyFail('No such city found'))
            })
            .catch(err => dispatch(fetchLocationKeyFail(err)))
    }
};

const fetchWeatherDataStart = () => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_START,
    };
};

const fetchWeatherDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
        payload: data
    };
};

const fetchWeatherDataFail = (err) => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_FAIL,
        payload: err
    };
};

export const fetchWeatherData = (key) => {
    return dispatch => {
        dispatch(fetchWeatherDataStart());
        getWeatherData(key)
            .then(resp => dispatch(fetchWeatherDataSuccess(resp.data)))
            .catch(err => dispatch(fetchWeatherDataFail(err.message)))
    };
};

export const  sidebarOpen = (index) => {
    return {
        type: actionTypes.SIDEBAR_OPEN,
        payload: index
    };
};

export const  sidebarClosed = () => {
    return {
        type: actionTypes.SIDEBAR_CLOSED,
    };
};