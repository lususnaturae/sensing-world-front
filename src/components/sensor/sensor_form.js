/**
 * Created by marco on 29.6.2016.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


export class SensorForm extends Component {
    componentWillMount() {
        this.props.fetchSensorTypes();
        //debugger;
    }
    handleFormSubmit({username, password}) {
        console.log("save button pressed!!");
        debugger;
        // Need to do something to log user in
        //this.props.signinUser({username, password});
    }
    changeCheckBoxState(choice) {
        //debugger;
        this.props.changeActiveSensorTypeState(choice.name, this.props.sensorChoices.choices);
        //debugger;
    }
    renderSensorTypesCheckbox(choice) {
        return (
            <div key={choice.id}>
            <label>
                <input
                    type="checkbox"
                    checked={choice.isChecked}
                    onChange={this.changeCheckBoxState.bind(this, choice)}
                 />
                {choice.labeltoken}
            </label>
        </div>
        );
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
        //debugger;
        //console.log(this.props.sensorChoices.choices);
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Name:</label>
                    <input className="form-control" {...name} />

                </fieldset>

                {this.props.sensorChoices.choices.map(this.renderSensorTypesCheckbox, this)}

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

    return {
        errorMessage: state.auth.error,
        sensorChoices: state.sensors.sensorChoices};
}

export default reduxForm({
    form: 'sensorform',
    fields: ['name', 'usage_token'],
    validate
}, mapStateToProps, actions)(SensorForm);
