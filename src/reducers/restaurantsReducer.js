import { FETCH_RESTAURANTS_FULFILLED,  FETCH_RESTAURANTS_REJECTED, ADD_RESTAURANT_FULFILLED, ADD_RESTAURANT_REJECTED, CHANGE_URL} from '../actions/restaurantsActions';

export default function reducer(state = {
    restaurants: [],
    isLoaded: false,
    error: null,
    addedWorked: false,
    url: new URL("http://0.0.0.0:3000/restaurants")
}, action) {
    switch(action.type){
        case FETCH_RESTAURANTS_FULFILLED: {
            return {...state, isLoaded:true, restaurants: action.payload}
        }
        case FETCH_RESTAURANTS_REJECTED: {
            return {...state, isLoaded:true, error: action.payload}
        }
        case ADD_RESTAURANT_FULFILLED: {
            return {...state, addedWorked:true, restaurants: [...state.restaurants, action.payload]}
        }
        case ADD_RESTAURANT_REJECTED: {
            return {...state, addedWorked:false, error: action.payload}
        }
        case CHANGE_URL: {
            return {...state, url: action.payload}
        }
        default: {
            return state;
        }
    }
}

