/**
 * Created by marco on 17.6.2016.
 */
import { FETCH_SENSORS, FETCH_SENSOR_SUCCESS, FETCH_SENSOR_FAILURE, RESET_SENSORS } from '../actions/index';


// const INITIAL_STATE = { sensorsList: {sensors: [], error:null, loading: false},
//     newSensor:{sensor:null, error: null, loading: false},
//     activeSensor:{sensor:null, error:null, loading: false},
//     deletedSensor: {sensor: null, error:null, loading: false},
// };


export default function (state = [], action) {
    console.log("reducer_sensors");
    console.log(action);
    switch (action.type) {
        case FETCH_SENSORS:
            return { ...state, ...action.payload}
    }
    return state;

}