import { getWeatherHourlyData } from '../../service/helpers';
import * as actionTypes from './actionTypes';

const fetchHourlyDataStart = () => {
    return {
        type: actionTypes.FETCH_HOURLY_DATA_START
    };
};

const fetchHourlyDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_HOURLY_DATA_SUCCESS,
        payload: data
    };
};

const fetchHourlyDataFail = (err) => {
    return {
        type: actionTypes.FETCH_HOURLY_DATA_FAIL,
        payload: err
    };
};

export const fetchWeatherHourlyData = (key) => {
    return dispatch => {
        dispatch(fetchHourlyDataStart());
        getWeatherHourlyData(key)
            .then(resp => {
                console.log(resp);
                dispatch(fetchHourlyDataSuccess(resp.data))
            })
            .catch(err => {
                dispatch(fetchHourlyDataFail(err))
            })
    };
};