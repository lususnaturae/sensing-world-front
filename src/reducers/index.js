/**
 * Created by marco on 17.6.2016.
 */
import { combineReducers } from 'redux';

//import ActiveSensorReducer from './reducer_active_sensor';
import sensorsReducer from './reducer_sensors';
import markersReducer from './reducer_markers';

const rootReducer = combineReducers({
//    activeSensor: ActiveSensorReducer,
    sensors: sensorsReducer,
    sensorMarkers: markersReducer
});

export default rootReducer;
