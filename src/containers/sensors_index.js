/**
 * Created by marco on 17.6.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SensorsIndex extends Component {

    render() {
        console.log("SensorsIndex - render()");
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Purpose</th>

                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        sensors: state.sensors
    };
}

export default connect(mapStateToProps)(SensorsIndex);

