import React from 'react';

import './style.css';

const CityInput = props => {
    return (
        <section className={'input ' + (props.searchStarted ? 'top' : '')}>
            <input 
                className="cityInput" 
                type="text" 
                name="city" 
                onChange={props.changed} 
                value={props.value}
                placeholder='City name'    
            />
            <button onClick={props.submit}>Search!</button>
        </section>
    )
}

export default CityInput;