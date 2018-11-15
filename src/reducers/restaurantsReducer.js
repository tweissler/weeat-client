export default function reducer(state = {
    restaurants: [],
    isLoaded: false,
    error: null,
    addedWorked: false,
}, action) {
    switch(action.type){
        case "FETCH_RESTAURANTS_FULFILLED": {
            return {...state, isLoaded:true, restaurants: action.payload}
        }
        case "FETCH_RESTAURANTS_REJECTED": {
            return {...state, isLoaded:true, error: action.payload}
        }
        case "ADD_RESTAURANTS_FULFILLED": {
            debugger
            return {...state, addedWorked:true}
        }
        case "ADD_RESTAURANTS_REJECTED": {
            return {...state, addedWorked:false, error: action.payload}
        }
        default: {
            return state;
        }
    }
}

