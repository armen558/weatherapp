import React from 'react';

import './style.css';

const Backdrop = props => {
    return (
        <div 
            className={'backdrop ' + (props.open ? 'active' : '')}
            onClick={props.sidebarClosed}
        ></div>
    )
}

export default Backdrop