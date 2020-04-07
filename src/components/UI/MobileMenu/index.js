import React from 'react';

import Backdrop from '../Backdrop';
import NavigationItems from '../NavigationItems';

import './style.css';

const MobileMenu = props => {
    return (
        <div className={"mobileMenu" + (props.open ? ' open' : '') }>
            <nav>
                <NavigationItems clicked={props.clicked} />
            </nav>
        </div>
    )
}

export default MobileMenu;