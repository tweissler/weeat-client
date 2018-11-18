import React, { Component } from 'react';
import './NewRestaurant.css'
import {cuisines} from "../../cuisines";
import {addRestaurant} from "../../actions/restaurantsActions";
import {connect} from "react-redux";
import Portal from "../Portal";
import {DELIVERY_TIMES} from '../FilterBar/FiltersBar'

class NewRestaurant extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: null,
            address: null,
            cuisine: null,
            tenbis: null,
            deliveryTime: null,
            showDialog: false,
        };
    }

    openDialog = () => {
        this.setState({showDialog: true});
    }

    closeDialog = () => {
        this.setState({showDialog: false});
    }

    handleAddRestaurant = () => {
        this.props.addRestaurant("http://0.0.0.0:3000/restaurants", {name: this.state.name, address: this.state.address,
            cuisine: this.state.cuisine, tenbis: this.state.tenbis, deliveryTime: this.state.deliveryTime});
        this.setState({showDialog: false, name: null, address: null, cuisine: null, tenbis: null, deliveryTime: null});
    }

    handleValueChange = (e, name) => {
        this.setState({[name]: e.target.value});
    }

    render() {

        return (
            <div>
                <button className='add-button' onClick={this.openDialog} />
                <Portal> {this.state.showDialog &&
                    <div className='portal'>
                        <div className='portal_inner'>
                            <h1 className='add-rest'>Fill out restaurant details:</h1>
                            <form>
                                <input placeholder="Fill out the restaurant's name" className="input" type="text"
                                       value={this.state.name} onChange={(e) => this.handleValueChange(e, 'name')}/>
                                <input placeholder="Fill out the restaurant's address" className="input" type="text"
                                       value={this.state.address} onChange={(e) => this.handleValueChange(e, 'address')}/>
                            </form>
                            <select className="select" onChange={(e) => this.handleValueChange(e, 'cuisine')}
                                    value={this.state.cuisine}>
                                <option key="not-selected" value="">Select Cuisine</option>
                                {cuisines.map(op => {
                                    return <option key={`options-${op}`} value={op}>{op}</option>
                                })}
                            </select>
                            <select className="select" onChange={(e) => this.handleValueChange(e, 'tenbis')}
                                    value={this.state.tenbis}>
                                <option key="not-selected" value="">Select tenbis option</option>
                                <option key="true" value="true">Supports 10bis</option>
                                <option key="false" value="false">Doesn't support 10bis</option>
                            </select>
                            <select className="select" onChange={(e) => this.handleValueChange(e, 'deliveryTime')}
                                    value={this.state.deliveryTime}>
                                <option key="not-selected" value="">Select delivery time</option>
                                {DELIVERY_TIMES.map(op => {
                                    return <option key={`options-${op}`} value={op}>{op}</option>
                                })}
                            </select>
                            <button className='add' onClick={this.handleAddRestaurant}>Add</button>
                            <button className='close' onClick={this.closeDialog}>Cancel</button>
                        </div>
                    </div>
                }</Portal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        addedWorked: state.addedWorked,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addRestaurant: (url, body) => dispatch(addRestaurant(url, body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurant);
