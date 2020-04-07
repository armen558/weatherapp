import React from 'react';
import { NavLink } from 'react-router-dom';
import Switch from '../Switch';

import './style.css';

const NavigationItems = props => {
    return (
        <div className="navItemsWrap">
            <nav className={'navItems' + (props.desktopOnly ? ' desktopOnly' : '')}>
                <NavLink exact to="/" onClick={props.clicked}>Daily Forecast</NavLink>
                <NavLink exact to="/hourly-forecast" onClick={props.clicked}>Hourly Forecast</NavLink>
            </nav>
            <Switch />
        </div>
    )
}

export default NavigationItems;