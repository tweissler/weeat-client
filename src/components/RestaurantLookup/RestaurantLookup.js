import React, { Component } from 'react';
import './RestaurantLookup.css'

function capitalize (text){
    return text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}

class RestaurantLookup extends Component {
    constructor(props){
        super(props);
        this.state = {value: ""}
    }

    handleChange = (event) => {
        var newVal = capitalize(event.target.value);
        this.setState({value: newVal});
        this.props.passQueryParam("by_name", newVal);
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
