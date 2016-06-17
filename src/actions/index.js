/**
 * Created by marco on 17.6.2016.
 */
import axios from 'axios';

// Sensor list
export const FETCH_SENSORS = 'FETCH_SENSORS';
export const FETCH_SENSORS_SUCCESS = 'FETCH_SENSORS_SUCCESS';
export const FETCH_SENSORS_FAILURE = 'FETCH_SENSORS_FAILURE';
export const RESET_SENSORS = 'RESET_SENSORS';

// Create new sensor
export const CREATE_SENSOR = 'CREATE_SENSOR';
export const CREATE_SENSOR_SUCCESS = 'CREATE_SENSORS_SUCCESS';
export const CREATE_SENSOR_FAILURE = 'CREATE_SENSORS_FAILURE';
export const RESET_NEW_SENSOR = 'RESET_NEW_SENSOR';

// Validate sensor fields like Name, UsageToken
export const VALIDATE_SENSOR_FIELDS = 'VALIDATE_SENSOR_FIELDS';
export const VALIDATE_SENSOR_FIELDS_SUCCESS = 'VALIDATE_SENSOR_FIELDS_SUCCESS';
export const VALIDATE_SENSOR_FIELDS_FAILURE = 'VALIDATE_SENSOR_FIELDS_FAILURE';
export const RESET_SENSOR_FIELDS = 'RESET_SENSOR_FIELDS';


// Fetch sensor
export const FETCH_SENSOR = 'FETCH_SENSOR';
export const FETCH_SENSOR_SUCCESS = 'FETCH_SENSOR_SUCCESS';
export const FETCH_SENSOR_FAILURE = 'FETCH_SENSOR_FAILURE';
export const RESET_ACTIVE_SENSOR = 'RESET_ACTIVE_SENSOR';

//Delete post
export const DELETE_SENSOR = 'DELETE_SENSOR';
export const DELETE_SENSOR_SUCCESS = 'DELETE_SENSOR_SUCCESS';
export const DELETE_SENSOR_FAILURE = 'DELETE_SENSOR_FAILURE';
export const RESET_DELETED_SENSOR = 'RESET_DELETED_SENSOR';


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchSensors() {
    //const request = axios.get(`${SENSING_WORLD_URL}/sensors/list${API_KEY}`);
    // const request = axios({
    //     method: 'get',
    //     url: `${ROOT_URL}/posts`,
    //     headers: []
    // });
    console.log("fetchSensors()");
    const request =  [
        { id: 1,
            name: "Outside temperature",
            usage_token: "Temperature",
            lat: 61.466473,
            lon: 24.050716},
        { id: 2,
            name: "Kitchen temperature",
            usage_token: "Temperature",
            lat: 61.466306,
            lon: 24.050828}

    ];

    return {
        type: FETCH_SENSORS,
        payload: request,

    };
}



export function fetchSensorsSuccess(sensors) {
    return {
        type: FETCH_SENSOR_SUCCESS,
        payload: sensors
    };
}

export function fetchSensorsFailure(error) {
    return {
        type: FETCH_SENSORS_FAILURE,
        payload: error
    };
}

export function validateSensorFields(props) {
    //note: we cant have /posts/validateFields because it'll match /posts/:id path!
    const request = axios.post(`${ROOT_URL}/sensors/validate/fields`, props);

    return {
        type: VALIDATE_SENSOR_FIELDS,
        payload: request
    };
}

export function validateSensorFieldsSuccess() {
    return {
        type: VALIDATE_SENSOR_FIELDS_SUCCESS
    };
}

export function validateSensorFieldsFailure(error) {
    return {
        type: VALIDATE_SENSOR_FIELDS_FAILURE,
        payload: error
    };
}

export function resetSensorFields() {
    return {
        type: RESET_SENSOR_FIELDS
    }
};


export function createSensor(props, tokenFromStorage) {
    //const request = axios.post(`${ROOT_URL}/sensors`, props);
    const request = axios({
        method: 'post',
        data: props,
        url: `${ROOT_URL}/sensors`,
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
        payload: newPost
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

export function resetDeletedSensor() {
    return {
        type: RESET_DELETED_SENSOR
    }
};

export function fetchSensor(id) {
    const request = axios.get(`${ROOT_URL}/sensors/${id}`);

    return {
        type: FETCH_SENSOR,
        payload: request
    };
}


export function fetchSensorSuccess(activeSensor) {
    return {
        type: FETCH_SENSOR_SUCCESS,
        payload: activePost
    };
}

export function fetchSensorFailure(error) {
    return {
        type: FETCH_SENSOR_FAILURE,
        payload: error
    };
}

export function resetActiveSensor() {
    return {
        type: RESET_ACTIVE_SENSOR
    }
};

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

export function deleteSensorSuccess(deletedSensor) {
    return {
        type: DELETE_SENSOR_SUCCESS,
        payload: deletedSensor
    };
}

export function deleteSensorFailure(response) {
    return {
        type: DELETE_SENSOR_FAILURE,
        payload: response
    };
}
