/**
 * Created by marco on 17.6.2016.
 */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
//import { routerReducer as routing } from 'react-router-redux';

import authReducer from './auth_reducer';
import sensorsReducer from './sensors_reducer';


const rootReducer = combineReducers({
    form,
//    routing, 
    auth: authReducer,
    //activeSensor: ActiveSensorReducer,
    sensors: sensorsReducer,
    //sensorMarkers: markersReducer
});

export default rootReducer;
