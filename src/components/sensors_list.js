/**
 * Created by marco on 17.6.2016.
 */
import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class SensorsList extends Component {
    componentWillMount() {
        this.props.fetchSensors();
    }

    renderSensor(sensor) {
        console.log("SensorsIndex - renderList()");
        console.log(sensor);

            return (
                <tr key={sensor.id}
                >
                    <td>{sensor.name}</td>
                    <td>{sensor.usage_token}</td>
                </tr>
            );

    }

    render() {
        console.log("SensorsIndex - render()");
        console.log(this.props.sensors);

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Purpose</th>

                </tr>
                </thead>
                <tbody>
                {this.props.sensors.map(this.renderSensor)}

                </tbody>
            </table>
        );
    }
}
function mapStateToProps(state) {
    return {
        sensors: state.sensors
    };
}

// const mapDispatchToProps = (dispatch) => {
//     console.log("mapDispatchToProps");
//     console.log(dispatch);
//     console.log("mapDispatchToProps2");
//     console.log(dispatch(fetchSensors()));
//     console.log("mapDispatchToProps3");
//     return {
//             sensorsList: bindActionCreators({ fetchSensors } , dispatch)}
// }



export default connect(mapStateToProps, actions)(SensorsList)