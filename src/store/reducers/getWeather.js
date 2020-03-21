import * as actionTypes from '../actions/actionTypes';

const initialState = {
    locationKey: '',
    dailyForecasts: [],
    error: '',
    cityInfo: {
        cityName: '',
        country: ''
    },
    isSideBarOpen: false,
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
    loading: false,
    searchClicked: false,
    dataLoaded: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_STARTED:
            return {
                ...state, 
                searchClicked: true
            }
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
                    country: action.payload.Country.ID
                }
            };
        case actionTypes.FETCH_LOCATION_KEY_FAIL:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
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
                dataLoaded: true
            };
        case actionTypes.FETCH_WEATHER_DATA_FAIL:
            console.log(action.payload);
            return {
                ...state,
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