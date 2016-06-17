/**
 * Created by marco on 17.6.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSensors } from '../actions/index';
import { bindActionCreators } from 'redux';

class SensorsIndex extends Component {
    componentWillMount() {
        console.log("SensorsIndex - componentWillMount()");
        this.props.fetchSensors();
        console.log(this.props);
    }

    renderList(sensors) {
        console.log("SensorsIndex - renderList()");

        return sensors.map((sensor) => {
            return (
                <tr key={sensor.id}
                >
                    <td>{sensor.name}</td>
                    <td>{sensor.usage_token}</td>
                </tr>
            );
        });
    }

    render() {
        console.log("SensorsIndex - render()");
        const { sensors } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Purpose</th>

                </tr>
                </thead>
                <tbody>
                {this.renderList(sensors)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    console.log("mapStateToProps");
    console.log(state);
    return {
        sensors: state.sensors.sensors
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ sensor: })
// }

export default connect(mapStateToProps, { fetchSensors })(SensorsIndex);

