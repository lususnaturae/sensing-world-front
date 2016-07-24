/**
 * Created by marco on 20.6.2016.
 */
import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import Chart from '../chart';

export class SensorShow extends Component {
    // this just gives access Router property
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {

        if (this.props.params) {
            this.props.fetchSensor(this.props.params.id);
            this.props.fetchSensorTypes();
        }
    }

    handleFormSubmit({username, password}) {
        // Need to do something to log user in
        this.props.signinUser({username, password});
    }

    onDeleteClick() {
        this.props.deleteSensor(this.props.params.id)
            .then(() => {
                // blog post has been deleted, navigate the user to the index
                // We navigate by calling this.context.router.push with the
                // new path to navigate to.
                this.context.router.push('/');
            })
    }

    renderSensorTypes(choice) {
        return (
            <div key={choice.id}>

                    {choice.labeltoken}

            </div>
        );
    }

    renderTemperature() {

        const temps = [10,11,12,13,15,20,22,24,22,18,15,14,10];

        return (
            <tr key={name}>

                <td><Chart data={temps} color="orange" units="C" /></td>

            </tr>
        );
    }

    render() {
        //debugger;
        const { sensor } = this.props.activeSensor;
        if (!sensor) {
            return <div>Loading...</div>
        }
        const temps = [10,11,12,13,15,20,22,24,22,18,15,14,10];

        return (
            <div className="row">
            <div className="col-sm-6">
                <Link to="/sensors/list">Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>Delete Sensor</button>
                <h3>{sensor.name}</h3>
                <h6>Usage: </h6>
                {this.props.sensorChoices.choices.map(this.renderSensorTypes, this)}
                <p>{sensor.lat}, {sensor.lon}</p>
            </div>
                <div>
                    <Chart data={temps} color="orange" units="C" />

                </div>
                </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        sensorsList: state.sensors.sensorsList,
        sensorsMarkers: state.sensors.sensorsMarkers,
        activeSensor: state.sensors.activeSensor
    };
}

export default connect(mapStateToProps, actions)(SensorShow);