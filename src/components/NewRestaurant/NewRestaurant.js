import React, { Component } from 'react';
import './NewRestaurant.css'
import {addRestaurant} from "../../actions/restaurantsActions";
import {connect} from "react-redux";
import Portal from "../Portal";
import NewRestForm from '../NewRestForm/NewRestForm';

class NewRestaurant extends Component {

    constructor(props){
        super(props);
        this.state = {
            showDialog: false,
        };
    }

    openDialog = () => {
        this.setState({showDialog: true});
    }

    closeDialog = () => {
        this.setState({showDialog: false});
    }

    handleAddRestaurant = (values) => {
        this.props.addRestaurant(process.env.REACT_APP_SERVER_ADDRESS + "/restaurants", {name: values.name, address: values.address,
            cuisine: values.cuisine, tenbis: values.tenbis, deliveryTime: values.deliveryTime});
        this.closeDialog();
    }

    render() {
        return (
            <div>
                <button className='add-button' onClick={this.openDialog} />
                <Portal> {this.state.showDialog &&
                    <div className='portal'>
                        <NewRestForm handleAddRestaurant={this.handleAddRestaurant} closeDialog={this.closeDialog}/>
                    </div>
                }</Portal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        addedWorked: state.restaurantsReducer.addedWorked,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addRestaurant: (url, body) => dispatch(addRestaurant(url, body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurant);
