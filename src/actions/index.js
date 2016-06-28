/**
 * Created by marco on 17.6.2016.
 */
//import axios from 'axios';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_SENSORS,
    FETCH_SENSOR,
    DELETE_SENSOR,
    GENERATE_MARKERS
} from './types';

// const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://sensingworld.dev' : '/';
// const AUTH_URL = location.href.indexOf('localhost') > 0 ? 'http://auth.sensingworld.dev/api' : '/api';
// const SENSOR_URL = location.href.indexOf('localhost') > 0 ? 'http://sensors.sensingworld.dev/api' : '/api';
// const SENSORLOG_URL = location.href.indexOf('localhost') > 0 ? 'http://sensorlog.sensingworld.dev/api' : '/api';
// const ANALYTICS_URL = location.href.indexOf('localhost') > 0 ? 'http://analytics.sensingworld.dev/api' : '/api';
//
//
//
// export function signinUser({ email, password }) {
//     return function(dispatch) {
//         // Submit email/password to the server
//         axios.post(`${AUTH_URL}/signin`, { email, password })
//             .then(response => {
//                 // If request is good...
//                 // - Update state to indicate user is authenticated
//                 dispatch({ type: AUTH_USER });
//                 // - Save the JWT token
//                 localStorage.setItem('token', response.data.token);
//                 // - redirect to the route '/feature'
//                 browserHistory.push('/feature');
//             })
//             .catch(() => {
//                 // If request is bad...
//                 // - Show an error to the user
//                 dispatch(authError('Bad Login Info'));
//             });
//     }
// }
//
// export function signupUser({ email, password }) {
//     return function(dispatch) {
//         axios.post(`${AUTH_URL}/signup`, { email, password })
//             .then(response => {
//                 dispatch({ type: AUTH_USER });
//                 localStorage.setItem('token', response.data.token);
//                 browserHistory.push('/feature');
//             })
//             .catch(response => dispatch(authError(response.data.error)));
//     }
// }
//
// export function authError(error) {
//     return {
//         type: AUTH_ERROR,
//         payload: error
//     };
// }
//
// export function signoutUser() {
//     localStorage.removeItem('token');
//
//     return { type: UNAUTH_USER };
// }


export function fetchSensor(id) {
    //const request = axios.get(`${ROOT_URL}/sensors/${id}`);

    return {
        type: FETCH_SENSOR,
        payload: { id: 2,
            name: 'Kitchen temperature',
            usage_token: 'Temperature',
            lat: 61.466306,
            lon: 24.050828}
    };
}


export function fetchSensors() {
    return {
             type: FETCH_SENSORS,
             payload: [
                 { id: 1,
                     name: 'Outside temperature',
                     usage_token: 'Temperature',
                     lat: 61.466473,
                     lon: 24.050716},
                 { id: 2,
                     name: 'Kitchen temperature',
                     usage_token: 'Temperature',
                     lat: 61.466306,
                     lon: 24.050828}

             ]
    };


}

export function generateMarkers() {
    return {
        type: GENERATE_MARKERS,
        payload: [{
            position: {
                lat: 61.466473,
                lng: 24.050716
            },
            key: 'Outside temperature',
            defaultAnimation: 2
        },{
            position: {
                lat: 61.466306,
                lng: 24.050828
            },
            key: 'Kitchen temperature',
            defaultAnimation: 2
        }]
    }
}

export function deleteSensor(id, tokenFromStorage) {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/sensors/${id}`,
        headers: {'Authorization': `Bearer ${tokenFromStorage}`}
    });
    return {
        type: DELETE_SENSOR,
        payload: request
    };
}

//
//
// export function fetchSensorsSuccess(sensors) {
//     return {
//         type: FETCH_SENSOR_SUCCESS,
//         payload: sensors
//     };
// }
//
// export function fetchSensorsFailure(error) {
//     return {
//         type: FETCH_SENSORS_FAILURE,
//         payload: error
//     };
// }
//
// export function validateSensorFields(props) {
//     //note: we cant have /posts/validateFields because it'll match /posts/:id path!
//     const request = axios.post(`${ROOT_URL}/sensors/validate/fields`, props);
//
//     return {
//         type: VALIDATE_SENSOR_FIELDS,
//         payload: request
//     };
// }
//
// export function validateSensorFieldsSuccess() {
//     return {
//         type: VALIDATE_SENSOR_FIELDS_SUCCESS
//     };
// }
//
// export function validateSensorFieldsFailure(error) {
//     return {
//         type: VALIDATE_SENSOR_FIELDS_FAILURE,
//         payload: error
//     };
// }
//
// export function resetSensorFields() {
//     return {
//         type: RESET_SENSOR_FIELDS
//     }
// };
//
//
// export function createSensor(props, tokenFromStorage) {
//     //const request = axios.post(`${ROOT_URL}/sensors`, props);
//     const request = axios({
//         method: 'post',
//         data: props,
//         url: `${ROOT_URL}/sensors`,
//         headers: {'Authorization': `Bearer ${tokenFromStorage}`}
//     });
//
//     return {
//         type: CREATE_SENSOR,
//         payload: request
//     };
// }
//
// export function createSensorSuccess(newSensor) {
//     return {
//         type: CREATE_SENSOR_SUCCESS,
//         payload: newSensor
//     };
// }
//
// export function createSensorFailure(error) {
//     return {
//         type: CREATE_SENSOR_FAILURE,
//         payload: error
//     };
// }
//
// export function resetNewSensor() {
//     return {
//         type: RESET_NEW_SENSOR
//     }
// };
//
// export function resetDeletedSensor() {
//     return {
//         type: RESET_DELETED_SENSOR
//     }
// };
//
//
// export function fetchSensorSuccess(activeSensor) {
//     return {
//         type: FETCH_SENSOR_SUCCESS,
//         payload: activePost
//     };
// }
//
// export function fetchSensorFailure(error) {
//     return {
//         type: FETCH_SENSOR_FAILURE,
//         payload: error
//     };
// }
//
// export function resetActiveSensor() {
//     return {
//         type: RESET_ACTIVE_SENSOR
//     }
// };
//

// export function deleteSensorSuccess(deletedSensor) {
//     return {
//         type: DELETE_SENSOR_SUCCESS,
//         payload: deletedSensor
//     };
// }
//
// export function deleteSensorFailure(response) {
//     return {
//         type: DELETE_SENSOR_FAILURE,
//         payload: response
//     };
// }
