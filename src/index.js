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
//const middleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Signin} />
                <Route path="sensors/list" component={SensorsList} />
                <Route path="sensor/:id" component={SensorShow} />

                <Route path="signin" component={Signin} />
                <Route path="signout" component={Signout} />
                <Route path="signup" component={Signup} />

            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
