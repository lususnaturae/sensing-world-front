/**
 * Created by marco on 17.6.2016.
 */
import { FETCH_SENSORS } from '../actions/index';

const INITIAL_STATE = { sensors: [], activeSensor: null };

export default function (state = INITIAL_STATE, action) {
    console.log("reducer_sensors");
    console.log(action);
    switch (action.type) {
        case FETCH_SENSORS:
            return { ...state, sensors: action.payload}
        default:
            return state;
    }


}