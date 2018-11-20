import {createStore, applyMiddleware, combineReducers} from 'redux';
import {restaurantsReducer} from '../reducers/restaurantsReducer';
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

export default function configureStore() {
    return createStore(combineReducers({restaurantsReducer, form: formReducer}), applyMiddleware(thunk))
}

