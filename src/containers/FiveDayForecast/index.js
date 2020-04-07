import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Backdrop from '../../components/UI/Backdrop';
import CityInput from '../../components/CityInput';
import Forecast from '../../components/Forecast';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/UI/Spinner';

const FiveDayForecast = props => {

    const [state, setState] = useState({
        input: '',
        searchClicked: false
    });

    useEffect(() => {
        if (props.locKey) {
            setState({...state, searchClicked: true});
            props.onFetchWeatherData(props.locKey)
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

    const sidebarOpenHandler = (index) => {
        props.onSidebarOpen(index)
    };

    const sidebarClosedHandler = (index) => {
        props.onSidebarClosed()
    };

    let forecasts = <Spinner />
    if(!props.loading) {
        forecasts = (
            <Forecast 
                dailyData={props.dailyForecasts} 
                city={props.cityInfo} 
                sidebarOpen={sidebarOpenHandler}    
            />
        )
    };

    let sidebar = null;

    if(props.dataLoaded) {
        sidebar = <Sidebar 
        open={props.isSideBarOpen} 
        sidebarClosed={sidebarClosedHandler}
        data={props.sidebarData}    
        />
    } ;

    return (
        <div style={{marginTop: state.searchClicked ? '0' : '20vh', transition: 'all 0.3s'}}>
            <h1>Five day forecast</h1>
            <CityInput 
                changed={onChangeHandler} 
                value={state.value}
                submit={submitHandler}
                searchStarted={state.searchClicked}   
            />
            {forecasts}
            {props.error ? <p className="error">{props.error}</p> : null}
            {sidebar}
            <Backdrop open={props.isSideBarOpen} sidebarClosed={sidebarClosedHandler}/>
        </div>
    )    
};

const mapStateToProps = state => {
    return {
        locKey: state.fiveDayForecast.locationKey,
        dailyForecasts: state.fiveDayForecast.dailyForecasts,
        cityInfo: state.fiveDayForecast.cityInfo,
        isSideBarOpen: state.fiveDayForecast.isSideBarOpen,
        sidebarData: state.fiveDayForecast.sidebarData,
        loading: state.fiveDayForecast.loading,
        dataLoaded: state.fiveDayForecast.dataLoaded,
        error: state.fiveDayForecast.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLocationKey: (city) => dispatch(actions.fetchLocationKey(city)),
        onFetchWeatherData: (key) => dispatch(actions.fetchWeatherData(key)),
        onSidebarOpen: (index) => dispatch(actions.sidebarOpen(index)),
        onSidebarClosed: () => dispatch(actions.sidebarClosed())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FiveDayForecast);