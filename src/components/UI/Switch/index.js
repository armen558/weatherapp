import React, { useState } from 'react';

import './style.css';

const Switch = () => {
    const [state, setState] = useState({switched: false});

    const switchHandler = () => {
        setState(prevState => {
            return {switched: !prevState.switched}
        });
        document.body.classList.toggle('light')
    };

    return (
        <div className="switch-wrap">
            <div id="switch" onClick={switchHandler} className={"hover-target " + (state.switched ? "switched" : "") }>
                <div className="circle" ></div>
            </div>
        </div>
    )
}

export default Switch;