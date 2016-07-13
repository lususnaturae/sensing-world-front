/**
 * Created by marco on 17.6.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//import { routerMiddleware, push } from 'react-router-redux'
import Async from './middleware/async';
import reduxThunk from 'redux-thunk';


// import routes from './routes';

import App from './components/app';
import SensorsList from './components/sensor/sensor_list';
import SensorShow from './components/sensor/sensor_show';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';
import routes from './routes';

//const middleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />

    </Provider>
    , document.querySelector('.container'));
