import React from 'react';

import { months, weekDays } from '../../service/helperFunctions';

import './style.css';

const Sidebar = props => {
    let date = new Date(props.data.Date);
    let formattedDate = weekDays[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()];
    return (
        <div className={'sidebar ' + (props.open ? 'open' : '')}>
            <span className="closeBtn" onClick={props.sidebarClosed}>→</span>    
            <p className="date">{formattedDate}</p>
            <div className="dayForecast">
                <div className="imgBg">
                    <img src={'/images/icons/' + (props.data.Day ? props.data.Day.Icon : '') + '.png'} alt=""/>
                </div>
                <div className="info">
                    <p className="temp">{props.data.Temperature.Maximum.Value + '°' + props.data.Temperature.Maximum.Unit}</p>
                    <p className="precip">{props.data.Day.HasPrecipitation ? props.data.Day.PrecipitationType : 'No precipitation'} </p>
                    <p className="phrase">{props.data.Day.ShortPhrase}</p>
                    <p className="wind">Wind: {props.data.Day.Wind.Speed.Value + ' ' + props.data.Day.Wind.Speed.Unit}</p>
                </div>
            </div>
            <div className="nightForecast">
                <div className="imgBg">
                    <img src={'/images/icons/' + (props.data.Day ? props.data.Night.Icon : '') + '.png'} alt=""/>
                </div>
                <div className="info">
                    <p className="temp">{props.data.Temperature.Minimum.Value + '°' + props.data.Temperature.Minimum.Unit}</p>
                    <p className="precip">{props.data.Night.HasPrecipitation ? props.data.Night.PrecipitationType : 'No precipitation' }</p>
                    <p className="phrase">{props.data.Night.ShortPhrase}</p>
                    <p className="wind">Wind: {props.data.Night.Wind.Speed.Value + ' ' + props.data.Night.Wind.Speed.Unit}</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;