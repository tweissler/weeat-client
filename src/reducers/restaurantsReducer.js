export default function reducer(state = {
    restaurants: [],
    isLoaded: false,
    error: null,
}, action) {
    switch(action.type){
        case "FETCH_RESTAURANTS_FULFILLED": {
            return {...state, isLoaded:true, restaurants: action.payload}
        }
        case "FETCH_RESTAURANTS_REJECTED": {
            return {...state, isLoaded:true, error: action.payload}
        }
        default: {
            return state;
        }
    }
}