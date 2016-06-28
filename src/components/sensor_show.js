/**
 * Created by marco on 20.6.2016.
 */
import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class SensorShow extends Component {
    // this just gives access Router property
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {

        debugger;
        this.props.fetchSensors();
        this.props.generateMarkers(this.props.sensors);
        this.props.fetchSensor(this.props.params.id, this.props.sensors);
        debugger;
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

    render() {
        debugger;
        const { activeSensor } = this.props;
        if (!activeSensor) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>Delete Sensor</button>
                <h3>{activeSensor.name}</h3>
                <h6>Categories: {activeSensor.categories}</h6>
                <p>{activeSensor.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { sensors: state.sensors,
        sensorsMarkers: state.sensorMarkers,
        activeSensor: state.activeSensor };
}

export default connect(mapStateToProps, actions)(SensorShow);