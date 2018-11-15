import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FiltersBar from "../FilterBar/FiltersBar";
import RestaurantsList from "../RestaurantsList/RestaurantsList";
import {connect} from "react-redux";
import {fetchRestaurants} from "../../actions/restaurantsActions";

class App extends Component {

    constructor(props){
        super(props);
        this.addQueryParam = this.addQueryParam.bind(this);
        this.url = new URL("http://0.0.0.0:3000/restaurants");
    }

    componentDidMount() {
        this.props.fetchRestaurants(this.url);
    }

    addQueryParam(paramToAdd, valueToAdd){
        if(valueToAdd) {
            this.url.searchParams.set(paramToAdd, valueToAdd);
        } else {
            this.url.searchParams.delete(paramToAdd);
        }
        this.props.fetchRestaurants(this.url);
    }

    render() {
        const { error, isLoaded, restaurants } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <Header addQueryParam={this.addQueryParam}/>
                    <FiltersBar addQueryParam={this.addQueryParam}/>
                    <div className="main">
                        <RestaurantsList restaurants={restaurants}/>
                        <div className="map">Map placeholder</div>
                    </div>
                </>
            );
        }
    }

}

const mapStateToProps = state => {
    return({
        restaurants: state.restaurants,
        isLoaded: state.isLoaded,
        error: state.error,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchRestaurants: (url) => dispatch(fetchRestaurants(url))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);






