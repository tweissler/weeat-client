import React, {Component, Fragment} from 'react';
import './App.css';
import Header from '../Header/Header';
import FiltersBar from "../FilterBar/FiltersBar";
import RestaurantsList from "../RestaurantsList/RestaurantsList";

const Content = () => (
    <div className="main">
        <RestaurantsList restaurants={restaurants}/>
        <div className="map">Map placeholder</div>
    </div>
);

const App2 = () => (
    <Fragment>
        <Header setQueryString={this.setQueryString}/>
        <FiltersBar setQueryString={this.setQueryString}/>
        <Content/>
    </Fragment>
)

export default App2;





