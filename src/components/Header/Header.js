import React, { Component } from 'react';
import RestaurantLookup from "../RestaurantLookup/RestaurantLookup";
import './Header.css'
import NewRestaurant from '../NewRestaurant/NewRestaurant';

class Header extends Component {

    passQueryParam = (paramToAdd, valueToAdd) => {
        this.props.addQueryParam(paramToAdd, valueToAdd);
    }

    render() {
        return (
            <div className='header'>
                <NewRestaurant/>
                <h1 className='header-text'>WeEat</h1>
                <h2 className='sub-header-text'>It's 12:00 and you're hungry.</h2>
                <RestaurantLookup className="restaurant-lookup" passQueryParam={this.passQueryParam}/>
            </div>
        );
    }
}

export default Header;


