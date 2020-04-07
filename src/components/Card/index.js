import React from 'react';

import { months, weekDays } from '../../service/helpers';

import './style.css';

const Card = props => {

    let date = new Date(props.data.date);

    let weekDay = weekDays[date.getDay()];
    if(props.index === 0) {
        weekDay = 'Today';
    } else if (props.index === 1) {
        weekDay = 'Tomorrow'
    };

    let formattedDate = (
        <div>
            <p className="day">{weekDay}</p>
            <p className="month">{date.getDate() + ' ' + months[date.getMonth()]}</p>
        </div>
    )

    return (
        <div className="card" onClick={() => props.sidebarOpen(props.index)}>
            <div className="image"><img src={'/images/icons/' + props.data.dayIcon + '.png'} alt=""/></div>
            <hr className="divider"/>
            <div className="text">
                {formattedDate}
                <p className="temp">
                    {Math.round(props.data.temp.Maximum.Value) + '°' + props.data.temp.Maximum.Unit} / {Math.round(props.data.temp.Minimum.Value)  + '°' + props.data.temp.Minimum.Unit}
                </p>
            </div>
        </div>
    );
};

export default Card;