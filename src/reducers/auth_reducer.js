/**
 * Created by marco on 26.6.2016.
 */
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_SUCCESS_RESET
} from '../actions/types';

const INITIAL_STATE = {
    error: '',
    message: '',
    authenticated: false,
    signup: false
}

export default function(state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, error: '', message: '', authenticated: true, signup: false};
        case UNAUTH_USER:
            return { ...state, error: '', authenticated: false, signup: false};
        case AUTH_ERROR:
            return { ...state, error: action.payload, authenticated: false, signup: false};
        case AUTH_SIGNUP_SUCCESS:
            return { ...state, message: 'auth.singup.success',  signup: true}
        case AUTH_SIGNUP_SUCCESS_RESET:
            return { ...state, signup: false}
    }
    
    return state;
}