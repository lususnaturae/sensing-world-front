/**
 * Created by marco on 17.6.2016.
 */
import React, {Component} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import GoogleMap from '../google_map';

class SensorsList extends Component {
    componentWillMount() {
        this.props.fetchSensors();
        this.props.generateMarkers(this.props.sensors);
        this.props.fetchSensor("1");
        //debugger;
    }

    renderSensor(sensor) {
        console.log("SensorsIndex - renderList()");
        console.log(sensor);
        //debugger;
        return (

            <tr key={sensor.id} >

                <td><Link to={"sensor/" + sensor.id} >{sensor.name}</Link></td>
                <td>{sensor.usage_token}</td>
                
            </tr>


        );

    }

    render() {

        console.log("SensorsIndex - render()");
        console.log(this.props.sensorsList);
        const {sensors, error, loading } = this.props.sensorsList;
        const  {markers } = this.props.sensorsMarkers;
        //debugger;
        return (
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <table className="table table-hover">
                    <thead>
                     <tr>
                        <th>Name</th>
                        <th>Purpose</th>
                </tr>

                    </thead>
                    <tbody>
                    {this.props.sensorsList.sensors.map(this.renderSensor)}

                    </tbody>
                </table>
            </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <GoogleMap data={this.props.sensorsMarkers}  />

                    </div>


</div>

        );
    }
}

function mapStateToProps(state) {
    //debugger;
    return {
        sensorsList: state.sensors.sensorsList,
        sensorsMarkers: state.sensors.sensorsMarkers,
        activeSensor: state.sensors.activeSensor
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