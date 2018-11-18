import React, { Component } from 'react';
import './Rating.css';
import {RATING_OPTIONS} from '../FilterBar/FiltersBar';

class Rating extends Component {
    render() {
        const rating = this.props.rating;

        return (
            <div>
                <span className='rating'>Rating:
                    {RATING_OPTIONS.map(function(r) {
                        return <span hidden={rating<r}>⭐</span>
                    })}
                </span>
            </div>
        );
    }
}

export default Rating;
