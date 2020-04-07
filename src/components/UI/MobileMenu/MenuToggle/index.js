import React from 'react';

import './style.css';

const MenuToggle = props => {
    return (
        <div className={"menuToggle" + (props.open ? ' open' : '')} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuToggle;