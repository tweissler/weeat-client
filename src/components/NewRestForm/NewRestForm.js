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
                        <Field className='input' name="name" component={RenderInput} type="text" placeholder="Restaurant Name" label="Restaurant Name"/>
                    </div>
                    <div>
                        <Field className='input' name="address" component={RenderInput} type="text" placeholder="Address" label="Address"/>
                    </div>
                    <div>
                        <Field className='select' name="cuisine" component={RenderSelect} label="cuisine">
                            <option></option>
                            {cuisines.map(op => {
                                return <option key={`options-${op}`} value={op}>{op}</option>
                            })}
                        </Field>
                    </div>
                    <div>
                        <Field className='select' name="deliveryTime" component={RenderSelect} label="Delivery time">
                            <option></option>
                            {DELIVERY_TIMES.map(op => {
                                return <option key={`options-${op}`} value={op}>{op}</option>
                            })}
                        </Field>
                    </div>
                    <div>
                        <Field className='check-box' name="tenbis" component={RenderInput} type="checkbox" label='Supports 10bis'/>
                    </div>
                    <div className='buttons'>
                        <button className='button' type="submit"  disabled={submitting}>Add</button>
                        <button className='button' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        <button className='button' type="button" onClick={closeDialog}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

const RenderInput = ({input, label, type, meta: { touched, error }}) => (
    <div>
        <label className='label'>{label}</label>
        {touched && error && <span className='error'>*{error}</span>}
        <div>
            <input className='input' {...input} placeholder={label} type={type} />
        </div>
    </div>
)

const RenderSelect = ({input, label, type, meta: { touched, error }, children}) => (
    <div>
        <label className='label'>{label}</label>
        {touched && error && <span className='error'>*{error}</span>}
        <div>
            <select className='select' {...input} placeholder={label} type={type} >
                {children}
            </select>
        </div>
    </div>
)

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'This field is required'
    }
    if (!values.cuisine) {
        errors.cuisine = 'This field is required'
    }
    if (!/^([-+]?)([\d]{1,2})(((\.)(\d+)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/i.test(values.address)) {
        errors.address = 'Address must contain valid coordinates (eg. 35.1863 -74.2648)'
    }
    return errors
}



export default reduxForm({
    form: 'add-rest',
    validate
})(NewRestForm)
