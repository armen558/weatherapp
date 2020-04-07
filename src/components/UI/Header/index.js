import React, { useState } from 'react';

import MenuToggle from '../MobileMenu/MenuToggle';
import MobileMenu from '../MobileMenu';
import NavigationItems from '../NavigationItems';

import './style.css';

const Header = () => {

    const [state, setState] = useState({isMenuOpened: false});

    const menuOpenHandler = () => {
        setState(prevState => {
            return {isMenuOpened: !prevState.isMenuOpened}
        })
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="leftCol">
                        <img className="logo" src="/images/logo.png" alt="logo"/>
                        <p>Weather forecast</p>
                    </div>
                    <div className="rightCol">
                        <NavigationItems desktopOnly/>
                        <MenuToggle clicked={menuOpenHandler} open={state.isMenuOpened}/>
                        <MobileMenu open={state.isMenuOpened} clicked={menuOpenHandler}/>
                    </div>
                </div>
            </header>
            <p className="headerText">Weather forecasts for thousands of locations around the world</p>  
        </>
    )
}

export default Header;