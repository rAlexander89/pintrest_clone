import React from 'react'
import GreetingContainer from './greeting/greeting_container.js';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return(
    <div>
        <header>
        <h1>HELLO!!!</h1>
        <GreetingContainer/>
        </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
    );
};

export default App;