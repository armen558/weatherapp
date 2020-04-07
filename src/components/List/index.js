import React from 'react';
import ListItem from './ListItem';

import './style.css';

const List = props => {

    let listItems = props.data.map(el => {
        return (
            <ListItem
                key={el.DateTime}
                icon={el.WeatherIcon}
                iconPhrase={el.IconPhrase}
                isDay={el.IsDaylight}
                temp={el.Temperature.Value}
                unit={el.Temperature.Unit}
                date={el.DateTime}
            />
        )
    })

    return (
        <div className="list">
            {props.city.cityName 
                ? <h2 className="cityNameHeader">{props.city.cityName}, {props.city.countryCode}<span>{props.city.countryFullName}</span></h2>
                : null
            }
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default List;