import React, { Component } from 'react';
import './Restaurant.css'
import Rating from '../Rating/Rating'

class Restaurant extends Component {
    render() {
        const rest = this.props.rest;

        return (
            <tr className='rest'>
                <td className='cuisine'>{ rest.cuisine }</td>
                    <td className='rest-name'>{rest.name}
                        {rest.tenbis ? <img src={require('../../images/tenbis.jpg')} className='tenbis'/> : null}
                    <Rating key={rest.name} rating={rest.rating}/>
                </td>
            </tr>
        );
    }
}

export default Restaurant;
