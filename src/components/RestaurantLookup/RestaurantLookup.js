import React, { Component } from 'react';
import './RestaurantLookup.css'

class RestaurantLookup extends Component {
    constructor(props){
        super(props);
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newVal = this.capitalize(event.target.value);
        this.setState({value: newVal});
        this.props.passQueryParam("by_name", newVal);
    }

    capitalize(text){
         return text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }

    render() {
        return (
            <form>
                <input className="restaurant-lookup" placeholder="Find a restaurant" type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
        );
    }
}

export default RestaurantLookup;
