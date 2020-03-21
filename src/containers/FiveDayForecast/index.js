import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Backdrop from '../../components/Backdrop';
import CityInput from '../../components/CityInput';
import Forecast from '../../components/Forecast';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';

const FiveDayForecast = props => {

    const [state, setState] = useState({input: ''});

    useEffect(() => {
        if (props.locKey) {
            props.onFetchWeatherData(props.locKey)
        }
    }, [props.locKey]);

    const onChangeHandler = event => {
        setState({input: event.target.value});
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
    }

    let sidebar = null;

    if(props.dataLoaded) {
        sidebar = <Sidebar 
        open={props.isSideBarOpen} 
        sidebarClosed={sidebarClosedHandler}
        data={props.sidebarData}    
        />
    };

    return (
        <>
            <CityInput 
                changed={onChangeHandler} 
                value={state.value}
                submit={() =>props.onFetchLocationKey(state.input)}
                searchStarted={props.searchClicked}   
            />
            {forecasts}
            {sidebar}
            <Backdrop open={props.isSideBarOpen} sidebarClosed={sidebarClosedHandler}/>
        </>
    )    
};

const mapStateToProps = state => {
    return {
        locKey: state.locationKey,
        dailyForecasts: state.dailyForecasts,
        cityInfo: state.cityInfo,
        isSideBarOpen: state.isSideBarOpen,
        sidebarData: state.sidebarData,
        loading: state.loading,
        searchClicked: state.searchClicked,
        dataLoaded: state.dataLoaded
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