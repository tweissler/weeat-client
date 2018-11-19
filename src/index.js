import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import restaurants from './reducers/restaurantsReducer'
import { BrowserRouter, Route } from 'react-router-dom'
import { reducer as formReducer } from 'redux-form';

const store = createStore(combineReducers({restaurants, form: formReducer}), applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Route path='/' component={App}/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
