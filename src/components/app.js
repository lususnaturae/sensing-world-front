/**
 * Created by marco on 17.6.2016.
 */
import React, { Component } from 'react';

import SensorList from '../components/sensors_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SensorList />
            </div>
        );
    }
}
