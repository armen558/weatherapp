import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cityInfo: {
        cityName: '',
        countryCode: '',
        countryFullName: ''
    },
    dailyForecasts: [],
    dataLoaded: false,
    error: '',
    isSideBarOpen: false,
    locationKey: '',
    loading: false,
    sidebarData: {
        Day: {
            Wind: {
                Speed: ''
            }
        },
        Night: {
            Wind: {
                Speed: ''
            }
        },
        Temperature: {
            Minimum: '',
            Maximum: ''
        }
    },
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_LOCATION_KEY_START:
                return {
                    ...state,
                    loading: true
                };
        case actionTypes.FETCH_LOCATION_KEY_SUCCESS:
            return {
                ...state,
                locationKey: action.payload.Key,
                cityInfo: {
                    cityName: action.payload.EnglishName,
                    countryCode: action.payload.Country.ID,
                    countryFullName: action.payload.Country.EnglishName
                },
                error: ''
            };
        case actionTypes.FETCH_LOCATION_KEY_FAIL:
            return {
                ...state,
                cityInfo: {
                    cityName: '',
                    countryCode: '',
                    countryFullName: ''
                },
                error: action.payload,
                dailyForecasts: [],
                loading: false,
                locationKey: ''
            }
        case actionTypes.FETCH_WEATHER_DATA_START:
            return {
                ...state,
                loading: true,
                dataLoaded: false
            }
        case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                dailyForecasts: action.payload.DailyForecasts,
                loading: false,
                dataLoaded: true,
                error: ''
            };
        case actionTypes.FETCH_WEATHER_DATA_FAIL:
            console.log(action.payload);
            return {
                ...state,
                dailyForecasts: [],
                error: action.payload,
                loading: false
            }
        case actionTypes.SIDEBAR_OPEN:
            console.log(state.dailyForecasts[action.payload]);
            return {
                ...state,
                isSideBarOpen: true,
                sidebarData: state.dailyForecasts[action.payload]
            }
        case actionTypes.SIDEBAR_CLOSED:
            return {
                ...state,
                isSideBarOpen: false
            }
        default:
            return state
    };
};

export default reducer;