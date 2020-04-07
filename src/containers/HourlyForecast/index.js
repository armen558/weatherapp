import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CityInput from '../../components/CityInput';
import List from '../../components/List';
import Spinner from '../../components/UI/Spinner';

import * as actions from '../../store/actions'; 

const HourlyForecast = props => {
    const [state, setState] = useState({
        input: '',
        searchClicked: false,
    });

    let finalData = [];
    useEffect(() => {
        if (props.locKey) {
            setState({...state, searchClicked: true});
            props.onFetchHourlyForecast(props.locKey)
        }
    }, [props.locKey]);

    const submitHandler = (event) => {
        event.preventDefault();
        if(state.input.trim() !== '') {
            props.onFetchLocationKey(state.input)
            setState({...state, searchClicked: true})
        }
    }

    const onChangeHandler = (event, value) => {
        setState({...state, input: value});
    };

    let list = <Spinner />;

    if (!props.loading || !props.locKeyLoading) {
        list = <List data={props.hourlyData} city={props.cityInfo}/>
    };

    return (
        <div style={{marginTop: state.searchClicked ? '0' : '20vh', transition: 'all 0.3s'}}>
            <h1>Hourly forecast</h1>
            <CityInput 
                changed={onChangeHandler} 
                value={state.value}
                submit={submitHandler}
                searchStarted={state.searchClicked}   
            />
            {!props.error ? list : null}
            {props.error ? <p className="error" style={{marginTop: '100px'}}>{props.error}</p> : null}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        hourlyData: state.hourlyForecast.hourlyData,
        locKey: state.fiveDayForecast.locationKey,
        locKeyLoading: state.fiveDayForecast.loading,
        loading: state.hourlyForecast.loading,
        cityInfo: state.fiveDayForecast.cityInfo,
        error: state.fiveDayForecast.error || state.hourlyForecast.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLocationKey: (city) => dispatch(actions.fetchLocationKey(city)),
        onFetchHourlyForecast: (city) => dispatch(actions.fetchWeatherHourlyData(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HourlyForecast);