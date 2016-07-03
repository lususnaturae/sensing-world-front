/**
 * Created by marco on 17.6.2016.
 */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import authReducer from './auth_reducer';
import sensorsReducer from './sensors_reducer';


const rootReducer = combineReducers({
    form,
    auth: authReducer,
    //activeSensor: ActiveSensorReducer,
    sensors: sensorsReducer,
    //sensorMarkers: markersReducer
});

export default rootReducer;
