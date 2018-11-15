import React, { Component } from 'react';
import RestaurantLookup from "../RestaurantLookup/RestaurantLookup";
import './Header.css'
import Portal from '../Portal.js';
import {addRestaurant} from "../../actions/restaurantsActions";
import {connect} from "react-redux";
import { cuisines } from '../../cuisines';

class Header extends Component {

    constructor(props){
        super(props);
        this.passQueryParam = this.passQueryParam.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.state = {
            showDialog: false,
            name: null,
            address: null,
            cuisine: null,
            tenbis: null,
            deliveryTime: null
        };
    }

    passQueryParam(paramToAdd, valueToAdd){
        this.props.addQueryParam(paramToAdd, valueToAdd);
    }

    openDialog(){
        this.setState({showDialog: true});
    }

    closeDialog(){
        this.setState({showDialog: false});
    }

    handleAddRestaurant(e){
        this.props.addRestaurant("http://0.0.0.0:3000/restaurants", {name: this.state.name, address: this.state.address,
            cuisine: this.state.cuisine, tenbis: this.state.tenbis, deliveryTime: this.state.deliveryTime});
        this.setState({showDialog: false, name: null, address: null, cuisine: null, tenbis: null, deliveryTime: null});
    }

    handleValueChange(e, name){
        this.setState({[name]: e.target.value});
    }

    render() {
        return (
            <div className='header'>
                <button className='add-button' onClick={this.openDialog} />
                <Portal>{ this.state.showDialog &&
                <div className='portal'>
                    <div className='portal_inner'>
                        <h1 className='add-rest'>Fill out restaurant details:</h1>
                        <form>
                            <input placeholder="Fill out the restaurant's name" className="input" type="text" value={this.state.name} onChange={(e) => this.handleValueChange(e, 'name')}/>
                            <input placeholder="Fill out the restaurant's address" className="input" type="text" value={this.state.address} onChange={(e) => this.handleValueChange(e, 'address')} />
                        </form>
                        <select className="select" onChange={(e) => this.handleValueChange(e, 'cuisine')} value={this.state.cuisine}>
                            <option value="">Select Cuisine</option>
                            {cuisines.map(op => {
                                return <option value={op}>{op}</option>
                            })}
                        </select>
                        <select className="select" onChange={(e) => this.handleValueChange(e, 'tenbis')} value={this.state.tenbis}>
                            <option value="">Select tenbis option</option>
                            <option value="true">Supports 10bis</option>
                            <option value="false">Doesn't support 10bis</option>
                        </select>
                        <select className="select" onChange={(e) => this.handleValueChange(e, 'deliveryTime')} value={this.state.deliveryTime}>
                            <option value="">Select delivery time</option>
                            {[10,20,30,40,50,60,70,80,90,100,110].map(op => {
                                return <option value={op}>{op}</option>
                            })}
                        </select>
                        <button className='add' onClick={this.handleAddRestaurant}>Add</button>
                        <button className='close' onClick={this.closeDialog}>Cancel</button>
                    </div>
                </div>
                }</Portal>
                <h1 className='header-text'>WeEat</h1>
                <h2 className='sub-header-text'>It's 12:00 and you're hungry.</h2>
                <RestaurantLookup classNa y="restaurant-lookup" passQueryParam={this.passQueryParam}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        addedWorked: state.addedWorked,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        addRestaurant: (url, body) => dispatch(addRestaurant(url, body))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

