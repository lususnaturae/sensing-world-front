/**
 * Created by marco on 17.6.2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SensorList from './components/sensor_list';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={SensorList} />
    </Route>
);
