import axios from 'axios';

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
    });
};

export const getWeatherData = (key) => {
    return axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + key + 
            '?details=true&getPhotos=true&metric=true&apikey=o3QbMB9GA0RRUCtKux2wMyaRnSqZ6FDD',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        },
        mode: 'no-cors',
        cache: 'no-cache',
    });
};

export const getWeatherHourlyData = (key) => {
    return axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + key + 
            '?details=true&getPhotos=true&metric=true&apikey=o3QbMB9GA0RRUCtKux2wMyaRnSqZ6FDD',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        },
        mode: 'no-cors',
        cache: 'no-cache',
    });
};