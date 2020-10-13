import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './util/session_api_util';
// import configureStore from './store/store';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded',() =>{
    const root = document.getElementById('root');
    // const store = configureStore();
    // ReactDOM.render(<Root store={store}/>, root);
    ReactDOM.render(<h1>Hi, everybody!</h1>, root);
    window.login = login;
    window.logout = logout;
    window.signup = signup;
});

