import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FiltersBar from "../FilterBar/FiltersBar";
import RestaurantsList from "../RestaurantsList/RestaurantsList";
import {connect} from "react-redux";
import {fetchRestaurants, changeUrl} from "../../actions/restaurantsActions";
import Map from "../Map/Map";

class App extends Component {

    componentDidMount() {
        this.props.fetchRestaurants(this.props.url);
    }

    addQueryParam = (paramToAdd, valueToAdd) => {
        let newUrl = this.props.url;
        if(valueToAdd) {
            newUrl.searchParams.set(paramToAdd, valueToAdd);
        } else {
            newUrl.searchParams.delete(paramToAdd);
        }
        this.props.changeUrl(newUrl);
        this.props.fetchRestaurants(newUrl);
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
                        <Map restaurants={restaurants}/>
                    </div>
                </>
            );
        }
    }

}

const mapStateToProps = state => {
    return{
        restaurants: state.restaurants,
        isLoaded: state.isLoaded,
        error: state.error,
        url: state.url,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchRestaurants: (url) => dispatch(fetchRestaurants(url)),
        changeUrl: (newUrl) => dispatch(changeUrl(newUrl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);






