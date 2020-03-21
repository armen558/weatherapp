import React from 'react';

import './style.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img className="logo" src="/images/logo.png" alt="logo"/>
                <p>Weather forecast</p>
            </div>
        </header>
    )
}

export default Header;