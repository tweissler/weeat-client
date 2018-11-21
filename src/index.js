import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'
import configureStore from './store/configureStore';

ReactDOM.render(
<Provider store={configureStore()}>
    <BrowserRouter>
        <Route path='/' component={App}/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();

console.log("process.env", process.env)