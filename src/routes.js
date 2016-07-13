/**
 * Created by marco on 17.6.2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import SensorsList from './components/sensor/sensor_list';
import SensorShow from './components/sensor/sensor_show';
import SensorForm from './components/sensor/sensor_form';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Signin}/>
        <Route path="sensors/list" component={RequireAuth(SensorsList)}/>
        <Route path="sensor/create" component={RequireAuth(SensorForm)}/>
        <Route path="sensor/update/:id" component={RequireAuth(SensorForm)}/>

        <Route path="sensor/:id" component={RequireAuth(SensorShow)}/>
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={RequireAuth(Signout)}/>
        <Route path="signup" component={Signup}/>

    </Route>
);
