/**
 * Created by marco on 29.6.2016.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

export class SensorForm extends Component {

    handleFormSubmit({username, password}) {
        // Need to do something to log user in
        this.props.signinUser({username, password});
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {

        const { handleSubmit, fields: { name, usage_token}} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Name:</label>
                    <input className="form-control" {...name} />
                    {name.touched && name.error && <div className="error">{name.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Usage_token:</label>
                    <input className="form-control" {...usage_token}  />
                    {usage_token.touched && usage_token.error && <div className="error">{usage_token.error}</div>}
                </fieldset>

                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Save</button>
            </form>

        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.name) {
        errors.name = 'Please enter name of your sensor';
    }

    return errors;
}


function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'sensorform',
    fields: ['name', 'usage_token'],
    validate
}, mapStateToProps, actions)(SensorForm);
