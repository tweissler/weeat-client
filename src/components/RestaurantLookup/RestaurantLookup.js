import React, { Component } from 'react';
import './RestaurantLookup.css'

class RestaurantLookup extends Component {
    constructor(props){
        super(props);
        this.value = ""
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.value = this.capitalize(event.target.value);
        this.props.passQueryParam("by_name", this.value);
    }

    capitalize(text){
         return text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }

    render() {
        return (
            <form>
                <input className="restaurant-lookup" type="text" value={this.value} onChange={this.handleChange} />
            </form>
        );
    }
}

export default RestaurantLookup;
