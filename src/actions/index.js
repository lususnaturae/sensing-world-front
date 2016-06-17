/**
 * Created by marco on 17.6.2016.
 */
import axios from 'axios';

//const API_KEY = '04bcc792b4d3ae23f0a98a47646bae41';
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const SENSING_WORLD_URL = `http://www.sensingworld.org/list?oauthtoken=${API_KEY}`;


export const FETCH_SENSORS = 'FETCH_SENSORS';
export const FETCH_SENSOR = 'FETCH_SENSOR';
export const CREATE_SENSOR = 'CREATE_SENSOR';
export const DELETE_SENSOR = 'DELETE_SENSOR';


export function fetchSensors() {
    //const request = axios.get(`${SENSING_WORLD_URL}/sensors/list${API_KEY}`);
    return {
        type: FETCH_SENSORS,
        //payload: request
        payload: [
            { name: "Outside temperature",
                usage_token: "usagetoken.temperature",
                lat: 61.466473,
                lon: 24.050716},
            { name: "Kitchen temperature",
                usage_token: "usagetoken.temperature",
                lat: 61.466306,
                lon: 24.050828}

        ]
    };
}

