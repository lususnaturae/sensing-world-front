/**
 * Created by marco on 17.6.2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SensorsList from './components/sensor/sensor_list';
import SensorShow from './components/sensor/sensor_show';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Signin} />
        <Route path="sensors/list" component={SensorsList} />
        <Route path="sensors/:id" component={RequireAuth(SensorShow)} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />

    </Route>
);
