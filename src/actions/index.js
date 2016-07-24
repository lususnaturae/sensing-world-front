/**
 * Created by marco on 17.6.2016.
 */
import axios from 'axios';
import querystring from 'querystring';
import $ from 'jquery';
import {push} from 'react-router-redux';

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_SUCCESS_RESET,
    CREATE_SENSOR,
    CREATE_SENSOR_SUCCESS,
    CREATE_SENSOR_FAILURE,
    CREATE_SENSOR_SUCCESS_RESET,
    FETCH_SENSORS,
    FETCH_SENSORS_SUCCESS,
    FETCH_SENSORS_FAILURE,
    FETCH_SENSOR,
    FETCH_SENSOR_SUCCESS,
    FETCH_SENSOR_FAILURE,
    FETCH_SENSOR_TYPE_CHOICELIST,
    FETCH_SENSOR_TYPE_CHOICELIST_SUCCESS,
    FETCH_SENSOR_TYPE_CHOICELIST_FAILURE,
    FETCH_ACTIVE_SENSOR_TYPE_DEFAULT_STATE,
    CHANGE_ACTIVE_SENSOR_TYPE_STATE,
    DELETE_SENSOR,
    GENERATE_MARKERS
} from './types';

const AUTH_URL = 'http://auth.sensingworld.eu:8080';
//const AUTH_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8080' : '';
const BASE_URL = 'http://base.sensingworld.eu:8888';

// const SENSOR_URL = location.href.indexOf('localhost') > 0 ? 'http://sensors.sensingworld.dev/api' : '/api';
// const SENSORLOG_URL = location.href.indexOf('localhost') > 0 ? 'http://sensorlog.sensingworld.dev/api' : '/api';
// const ANALYTICS_URL = location.href.indexOf('localhost') > 0 ? 'http://analytics.sensingworld.dev/api' : '/api';
//
//
//
export function signinUser({username, password}) {
    return function (dispatch) {
        // Submit email/password to the server
        const qq = querystring.stringify({
            "username": username,
            password: password,
            client_id: 'testi',
            client_secret: 'testi',
            grant_type: 'password'
        });
        console.log(qq);
        axios.post(`${AUTH_URL}/oauth/token`,
            qq,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"


                }
            }
        )
            .then(response => {
                // If request is good...
                console.log("signin");
                console.log(response);

                // - Save the JWT token
                localStorage.setItem('sensing_world_access_token', response.data.access_token);
                localStorage.setItem('sensing_world_token_type', response.data.token_type);
                localStorage.setItem('sensing_world_token_expires_in', response.data.expires_in);

                // - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});
                // - redirect to the route '/feature'

            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({username, email, password}) {
    return function (dispatch) {
        // const qq = querystring.stringify({ "username": username , "email": email,
        //     password: password,
        //     client_id: 'testi',
        //     client_secret: 'testi',
        //     grant_type: 'password'
        // });
        axios.post(`${AUTH_URL}/signup`, {username, email, password}, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
                console.log(response);
                dispatch({type: AUTH_SIGNUP_SUCCESS});
                console.log("ennen history");
                // browserHistory.push('http://localhost:3080/sensors/list');
                //debugger;
                //this.props.dispatch(push('/signin'));
                console.log("jälkeen history");
            })
            .catch(response => {
                console.log(response.data);
                dispatch(authError(response.data.error))
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function authSignupReset() {
    return {
        type: AUTH_SIGNUP_SUCCESS_RESET
    }
}

export function signoutUser() {
    localStorage.removeItem('sensing_world_access_token');
    localStorage.removeItem('sensing_world_token_type');
    localStorage.removeItem('sensing_world_token_expires_in');
    return {type: UNAUTH_USER};
}

export function createSensor(props, tokenFromStorage) {
    //const request = axios.post(`${ROOT_URL}/sensors`, props);
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/list`,
        headers: {'Authorization': `Bearer ${tokenFromStorage}`}
    });

    return {
        type: CREATE_SENSOR,
        payload: request
    };
}

export function createSensorSuccess(newSensor) {
    return {
        type: CREATE_SENSOR_SUCCESS,
        payload: newSensor
    };
}

export function createSensorFailure(error) {
    return {
        type: CREATE_SENSOR_FAILURE,
        payload: error
    };
}

export function resetNewSensor() {
    return {
        type: RESET_NEW_SENSOR
    }
};

export function fetchSensor(id) {
    const tokenFromStorage = localStorage.getItem('sensing_world_access_token');
    return function (dispatch) {
        axios.get(`${BASE_URL}/api/sensors/${id}`,

            { headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokenFromStorage}`
            }}
        )
            .then(response => {
                //console.log(response);
                dispatch({ type: FETCH_SENSOR_SUCCESS,
                    payload: response.data});
                //console.log("ennen history");
                // browserHistory.push('http://localhost:3080/sensors/list');
                //debugger;
                //this.props.dispatch(push('/signin'));
                //console.log("jälkeen history");
            })
            .catch(response => {
                //console.log(response.data);
                dispatch({ type: FETCH_SENSOR_FAILURE,
                    payload: response.data.error})
            });

    }

}


export function fetchSensors() {
    return function (dispatch) {
        const tokenFromStorage = localStorage.getItem('sensing_world_access_token');
        axios.get(`${BASE_URL}/api/sensors/list`,

            { headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${tokenFromStorage}`
            }}
        )
            .then(response => {
                //console.log(response);
                dispatch({ type: FETCH_SENSORS_SUCCESS,
                payload: response.data});
                //console.log("ennen history");
                // browserHistory.push('http://localhost:3080/sensors/list');
                //debugger;
                //this.props.dispatch(push('/signin'));
                //console.log("jälkeen history");
            })
            .catch(response => {
                //console.log(response.data);
                dispatch({ type: FETCH_SENSORS_FAILURE,
                    payload: response.data.error})
            });

    }
}

export function fetchSensorTypes() {
    return function (dispatch) {
        const tokenFromStorage = localStorage.getItem('sensing_world_access_token');

        const url = `${BASE_URL}/api/sensors/datatypelist`;
        //const url = `http://base.sensingworld.eu:8888/api/sensors/datatypelist`;
        const config = {
            headers: {
                "Authorization": 'Bearer ' + tokenFromStorage,
                "Content-Type": "application/json"
            }
        };
        // console.log('Bearer: ', 'Bearer ' + tokenFromStorage);
        // console.log('url: ', url);
        // console.log('config: ', config);
        axios.get(url, config)
            .then(response => {
                //console.log(response);
                // set default values
                response.data.map((item) => {
                    item.isChecked = false;
                    return item;
                })
                dispatch({
                    type: FETCH_SENSOR_TYPE_CHOICELIST_SUCCESS,
                    payload: response.data
                });
                //console.log("ennen history");

            })
            .catch(response => {
                console.log(response.data);
                dispatch({
                    type: FETCH_SENSOR_TYPE_CHOICELIST_FAILURE,
                    payload: response.data.error
                });
            });
    }
}

export function changeActiveSensorTypeState(name, choices) {
    const updatedChoices = choices.map((item) => {
        if (item.name === name) {
            item.isChecked = !item.isChecked;
        }
        return item;
    })
    return {
        type: CHANGE_ACTIVE_SENSOR_TYPE_STATE,
        payload: updatedChoices
    }
}

export function fetchActiveSensorTypeState() {

    return {
        type: FETCH_ACTIVE_SENSOR_TYPE_DEFAULT_STATE,
        payload: [
            {
                name: 'TMP',
                isChecked: true
            },
            {
                name: 'GPS',
                isChecked: true
            },
            {
                name: 'FLAG',
                isChecked: false
            },
            {
                name: 'HUM',
                isChecked: false
            },
            {
                name: 'LUX',
                isChecked: false
            },


        ]
    }
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
        }, {
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
