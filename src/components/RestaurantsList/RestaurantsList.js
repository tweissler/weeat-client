import React, { Component } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantsList.css'
import PropTypes from 'prop-types';

class RestaurantsList extends Component {

    render() {
        const restaurants = this.props.restaurants;

        return (
            <div className="restaurants-list">
                <table>
                    {restaurants.map(rest => {
                        return <Restaurant key={rest.name} rest={rest}/>
                    })}
                </table>
            </div>
        );
    }
}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array
};

export default RestaurantsList;
