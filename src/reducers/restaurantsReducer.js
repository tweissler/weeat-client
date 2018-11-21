import { FETCH_RESTAURANTS_FULFILLED,  FETCH_RESTAURANTS_REJECTED, ADD_RESTAURANT_FULFILLED, ADD_RESTAURANT_REJECTED, CHANGE_URL} from '../actions/restaurantsActions';
import { handleActions } from 'redux-actions';

export const restaurantsReducer = handleActions({
    [FETCH_RESTAURANTS_FULFILLED]: (state, action) => {
        return {...state, isLoaded: true, restaurants: action.payload};
    },
    [FETCH_RESTAURANTS_REJECTED]: (state, action) => {
        return {...state, isLoaded: false, error: action.payload};
    },
    [ADD_RESTAURANT_FULFILLED]: (state, action) => {
        return {...state, addedWorked: true, restaurants: [...state.restaurants, action.payload]};
    },
    [ADD_RESTAURANT_REJECTED]: (state, action) => {
        return {...state, addedWorked: false, error: action.payload};
    },
    [CHANGE_URL]: (state, action) => {
        return {...state, url: action.payload};
    },
}, {
    restaurants: [],
    isLoaded: false,
    error: null,
    addedWorked: false,
    url: new URL((process.env.REACT_APP_SERVER_ADDRESS || "https://stark-mesa-42774.herokuapp.com") + "/restaurants")
});

