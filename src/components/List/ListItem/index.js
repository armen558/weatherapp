import React from 'react';

import './style.css';

const ListItem = props => {

    let date = new Date(props.date.substring(0, props.date.length - 6));
    let day = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2);
    let hour = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    return (
        <li className={"listItem " + (props.isDay ? "day" : "night")}>
            <p className="date">{day}, {hour}</p>
            <img src={'/images/icons/' + props.icon + '.png'} alt="weather icon"/>
            <hr className="divider"/>
            <p className="temp">{Math.round(props.temp)}°{props.unit}</p>
            <p className="phrase">{props.iconPhrase}</p>
        </li>
    )
}

export default ListItem;