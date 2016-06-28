// /**
//  * Created by marco on 21/06/16.
//  */
//
// import { FETCH_SENSOR } from '../actions/index';
//
//
// // const INITIAL_STATE = { sensorsList: {sensors: [], error:null, loading: false},
// //     newSensor:{sensor:null, error: null, loading: false},
// //     activeSensor:{sensor:null, error:null, loading: false},
// //     deletedSensor: {sensor: null, error:null, loading: false},
// // };
//
//
// export default function (state = [], action) {
//     console.log("reducer_active_sensor");
//     console.log(action);
//     switch (action.type) {
//         case FETCH_SENSOR:
//             console.log(state);
//             return [ ...state, ...action.payload];
//     }
//     return state;
//
// }