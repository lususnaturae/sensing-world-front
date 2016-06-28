/**
 * Created by marco on 17.6.2016.
 */
import {FETCH_SENSORS, FETCH_SENSOR, GENERATE_MARKERS} from '../actions/types';


const INITIAL_STATE = {
    sensorsList: {sensors: [], error: null, loading: false},
    newSensor: {sensor: {}, error: null, loading: false},
    activeSensor: {sensor: {}, error: null, loading: false},
    deletedSensor: {sensor: {}, error: null, loading: false},
    sensorsMarkers: {markers: [], error: null, loading: false}
};


export default function (state = INITIAL_STATE, action) {
    console.log("reducer_sensors");
    console.log(state);
    console.log(action);
    switch (action.type) {
        case FETCH_SENSOR:
            return {...state, activeSensor: {sensor: action.payload, error: null, loading: false}};
        case FETCH_SENSORS:
            return {...state, sensorsList: {sensors: action.payload, error: null, loading: false}};

        case GENERATE_MARKERS:
            return {...state, sensorsMarkers: {markers: action.payload, error: null, loading: false}};

        default:
            return state;
    }
    return state;

}