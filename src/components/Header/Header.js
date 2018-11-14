import React, { Component } from 'react';
import RestaurantLookup from "../RestaurantLookup/RestaurantLookup";
import './Header.css'
import AddRestaurant from "../AddRestaurant/AddRestaurant"

class Header extends Component {

    constructor(props){
        super(props);
        this.passQueryParam = this.passQueryParam.bind(this);
    }

    passQueryParam(paramToAdd, valueToAdd){
        this.props.addQueryParam(paramToAdd, valueToAdd);
    }

    render() {
        return (
            <div className='header'>
                <AddRestaurant/>
                <h1 className='header-text'>WeEat</h1>
                <h2 className='sub-header-text'>It's 12:00 and you're hungry.</h2>
                <RestaurantLookup classNa y="restaurant-lookup" passQueryParam={this.passQueryParam}/>
            </div>
        );
    }
}

export default Header;
