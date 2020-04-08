import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './style.css';

const Sidebar = props => {
    // let date = new Date(props.data.Date);
    // let formattedDate = weekDays[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()];
    return (
        <div className={'sidebar ' + (props.open ? 'open' : '')}>
            {/* <div>
                <p className="date">{formattedDate}</p>
            </div> */}
            <span className="closeBtn" onClick={props.sidebarClosed}><ArrowBackIcon fontSize="small"/></span>    
            <div className='flex'>
                <div className="dayForecast">
                    <p className="phrase">{props.data.Day.LongPhrase}</p>
                    <div className="flex info">
                        
                        <div>
                            <p className="label">Feels like</p>
                            <p className="temp">{Math.round(props.data.RealFeelTemperature.Maximum.Value) + '°' + props.data.RealFeelTemperature.Maximum.Unit}</p>
                        </div>

                        <div>
                            <p className="label">Precipitation</p>
                            <p className="precip">{props.data.Day.HasPrecipitation ? props.data.Day.PrecipitationType : 'No precipitation'} </p>
                        </div>

                        <div>
                            <p className="label">Wind</p>
                            <p className="wind">{props.data.Day.Wind.Speed.Value + ' ' + props.data.Day.Wind.Speed.Unit}</p>
                        </div>

                        <div className="imgBg">
                            <img src={'/images/icons/' + (props.data.Day ? props.data.Day.Icon : '') + '.png'} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="nightForecast">
                    <p className="phrase">{props.data.Night.LongPhrase}</p>
                    <div className="flex info">
                        <div className="imgBg">
                            <img src={'/images/icons/' + (props.data.Day ? props.data.Night.Icon : '') + '.png'} alt=""/>
                        </div>

                        <div>
                            <p className="label">Wind</p>
                            <p className="wind">{props.data.Night.Wind.Speed.Value + ' ' + props.data.Night.Wind.Speed.Unit}</p>
                        </div>
                        <div>
                            <p className="label">Precipitation</p>
                            <p className="precip">{props.data.Night.HasPrecipitation ? props.data.Night.PrecipitationType : 'No precipitation' }</p>
                        </div>

                        <div>
                            <p className="label">Feels like</p>
                            <p className="temp">{Math.round(props.data.RealFeelTemperature.Minimum.Value) + '°' + props.data.RealFeelTemperature.Minimum.Unit}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;