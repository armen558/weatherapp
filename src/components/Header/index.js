import React from 'react';

import logo from '../../assets/images/logo.png';
import './style.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img className="logo" src={logo} alt="logo"/>
                <p>Weather forecast</p>
            </div>
        </header>
    )
}

export default Header;