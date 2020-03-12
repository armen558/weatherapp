import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CityInput from '../components/CityInput';
import Card from '../components/Card';
import * as actions from '../store/actions';

const Weather = props => {

    useEffect(() => {
        if (props.locKey) {
            props.onFetchWeatherData(props.locKey)
        }
    }, [props.locKey]);

    return (
        <div>
            <CityInput />
            <Card />
            <button onClick={() => props.onFetchLocationKey('yerevan')}>Get</button>
        </div>
    )    
};

const mapStateToProps = state => {
    return {
        locKey: state.locationKey
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLocationKey: (city) => dispatch(actions.fetchLocationKey(city)),
        onFetchWeatherData: (key) => dispatch(actions.fetchWeatherData(key))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Weather);