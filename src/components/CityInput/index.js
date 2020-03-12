import React, { useState } from 'react';

import { getWeatherData } from '../../service/helperFunctions';

import './style.css';

const CityInput = () => {

    const [state, setState] = useState({input: ''});

    const onChangeHandler = event => {
        setState({input: event.target.value});
    }

    return (
        <section className="input">
            <input 
                className="cityInput" 
                type="text" 
                name="city" 
                onChange={onChangeHandler} value={state.input}
                placeholder='City name'    
            />
            <button onClick={() => getWeatherData(state.input)}>Go!</button>
        </section>
    )
}

export default CityInput;