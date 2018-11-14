import React, { Component } from 'react';
import './Rating.css'

class Rating extends Component {
    render() {
        const rating = this.props.rating;

        return (
            <div>
                <span className='rating'>Rating: </span><span hidden={rating<1}>⭐</span>
                <span hidden={rating<2}>⭐</span><span hidden={rating<3}>⭐</span>
            </div>
        );
    }
}

export default Rating;
