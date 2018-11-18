import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import restaurantReducer from './reducers/restaurantsReducer'
import { BrowserRouter, Route } from 'react-router-dom'

const store = createStore(restaurantReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Route path='/' component={App}/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
