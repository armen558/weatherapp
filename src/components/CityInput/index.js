import React from 'react';

import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { topCities }  from '../../service/topCities';
import SearchIcon from '@material-ui/icons/Search';

import './style.css';

const CityInput = props => {

    const filterOptions = createFilterOptions ({
        matchFrom: 'any',
        limit: 10,
        startAfter: 1,
    });

    const textField = (params) => (
        <TextField 
            {...params} 
            fullWidth
            type="text"
            name="city"
            placeholder="City name" 
            value={props.value} 
            variant="standard"
        />
    )

    return (
        <section className='input'>
            <form onSubmit={props.submit}>
                {/* <input 
                    className="cityInput" 
                    type="text" 
                    name="city" 
                    onChange={props.changed} 
                    value={props.value}
                    placeholder='City name'    
                /> */}
                <Autocomplete
                    autoHighlight
                    classes={{
                        root: 'autocompleteInputWrap',
                        inputRoot: 'autocompleteInput',
                        popper: 'popper',
                        clearIndicator: 'clearBtn'
                    }}
                    filterOptions={filterOptions}
                    freeSolo
                    id="cityInput"
                    getOptionLabel={option => {
                        if (typeof option === 'string') {
                            return option;
                        }
                        return option.name
                    }}
                    onInputChange={props.changed}
                    options={topCities}
                    renderInput={(params) => textField(params)}
                    // open
                />
                <button className="submitBtn"><SearchIcon fontSize="large"/></button>
            </form>
        </section>
    )
}

export default CityInput;
