import React, { Component } from 'react';
import './AddRestaurant.css'

class AddRestaurant extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            address: ""
        };
    }

    handleSubmit(event){

    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.name} />
                    <input type="text" value={this.state.address} />
                </form>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default AddRestaurant;
