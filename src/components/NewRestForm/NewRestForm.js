import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import {DELIVERY_TIMES} from '../FilterBar/FiltersBar'
import {cuisines} from "../../cuisines";
import './NewRestForm.css'

class NewRestForm extends Component {

    render() {
        const { handleSubmit, pristine, reset, submitting, handleAddRestaurant, closeDialog } = this.props;
        return (
            <div className='portal_inner'>
                <h1 className='add-rest'>Fill out restaurant details:</h1>
                <form onSubmit={handleSubmit(handleAddRestaurant)}>
                    <div>
                        <label className='label'>Restaurant Name</label>
                        <div>
                            <Field className='input' name="name" component="input" type="text" placeholder="Restaurant Name"/>
                        </div>
                    </div>
                    <div>
                        <label className='label'>Address</label>
                        <div>
                            <Field className='input' name="address" component="input" type="text" placeholder="Address"/>
                        </div>
                    </div>
                    <div>
                        <label className='label'>Cuisine</label>
                        <div>
                            <Field className='select' name="cuisine" component="select">
                                <option></option>
                                {cuisines.map(op => {
                                    return <option key={`options-${op}`} value={op}>{op}</option>
                                })}
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label className='label'>Delivery Time</label>
                        <div>
                            <Field className='select' name="deliveryTime" component="select">
                                <option></option>
                                {DELIVERY_TIMES.map(op => {
                                    return <option key={`options-${op}`} value={op}>{op}</option>
                                })}
                            </Field>
                        </div>
                    </div>
                    <div>
                        <Field className='check-box' name="tenbis" id="tenbis" component="input" type="checkbox"/>
                        <label className='label' htmlFor="tenbis">Supports 10bis</label>
                    </div>
                    <div className='buttons'>
                        <button className='button' type="submit">Add</button>
                        <button className='button' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        <button className='button' type="button" onClick={closeDialog}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'add-rest'
})(NewRestForm)
