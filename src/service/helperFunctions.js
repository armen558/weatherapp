import axios from 'axios';

export const getLocationKey = (city) => {
    return axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/locations/v1/search?q=' + city + 
            '&apikey=o3QbMB9GA0RRUCtKux2wMyaRnSqZ6FDD',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        cache: 'no-cache'
    })
};

export const getWeatherData = (key) => {
    return axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + key + 
            '?apikey=o3QbMB9GA0RRUCtKux2wMyaRnSqZ6FDD',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        },
        mode: 'no-cors',
        cache: 'no-cache',
    })
};