import React, { Component } from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantsList.css'

class RestaurantsList extends Component {

    render() {
        const restaurants = this.props.restaurants;

        return (
            <div className="restaurants-list">
                <table>
                    {restaurants.map(rest => {
                        return <Restaurant rest={rest}/>
                    })}
                </table>
            </div>
        );
    }
}

export default RestaurantsList;
