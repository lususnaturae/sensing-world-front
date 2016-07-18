/**
 * Created by marco on 17.6.2016.
 */
import {
    FETCH_SENSORS,
    FETCH_SENSOR,
    GENERATE_MARKERS,
    FETCH_SENSOR_TYPE_CHOICELIST,
FETCH_SENSOR_TYPE_CHOICELIST_SUCCESS,
FETCH_SENSOR_TYPE_CHOICELIST_FAILURE,
    FETCH_ACTIVE_SENSOR_TYPE_DEFAULT_STATE,
    CHANGE_ACTIVE_SENSOR_TYPE_STATE
} from '../actions/types';


const INITIAL_STATE = {
    sensorsList: {sensors: [], error: null, loading: false},
    newSensor: {sensor: {}, error: null, loading: false},
    activeSensor: {sensor: {}, error: null, loading: false},
    deletedSensor: {sensor: {}, error: null, loading: false},
    sensorsMarkers: {markers: [], error: null, loading: false},
    sensorChoices: { choices: [], error: null, loading: false}
};


export default function (state = INITIAL_STATE, action) {
    //console.log("reducer_sensors");
    //console.log(state);
    //console.log(action);
    switch (action.type) {
        case FETCH_SENSOR:
            return {...state, activeSensor: {sensor: action.payload, error: null, loading: false}};
        case FETCH_SENSORS:
            return {...state, sensorsList: {sensors: action.payload, error: null, loading: false}};
        case GENERATE_MARKERS:
            return {...state, sensorsMarkers: {markers: action.payload, error: null, loading: false}};
       case GENERATE_MARKERS:
            return {...state, sensorsMarkers: {markers: action.payload, error: null, loading: false}};
        case FETCH_SENSOR_TYPE_CHOICELIST_SUCCESS:
            return {...state, sensorChoices: {choices: action.payload, error: null, loading: false}};
       case FETCH_SENSOR_TYPE_CHOICELIST_FAILURE:
            return {...state, sensorChoices: {choices: [], error: action.payload, loading: false}};
        case FETCH_ACTIVE_SENSOR_TYPE_DEFAULT_STATE:
            return {...state, activeSensorChoiceState: {choiceState: action.payload, error: null, loading: false}};
        case CHANGE_ACTIVE_SENSOR_TYPE_STATE:
            return {...state, sensorChoices: {choices: action.payload, error: null, loading: false}};
        default:
            return state;
    }
    return state;

}