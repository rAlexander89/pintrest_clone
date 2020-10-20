// import {login, logout, signup} from './util/session_api_util';
import {
    fetchPins,
    fetchPin,
    createPin,
    updatePin,
    deletePin
} from './actions/pin_actions.js';



import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',() =>{
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
    window.fetchPin = fetchPin;
    window.fetchPins = fetchPins;
    // ReactDOM.render(<h1>beep boop beep boop</h1>, root);
    // window.login = login;
    window.getState = store.getState();
    window.dispatch = store.dispatch;

});


// window.logout = logout;
// window.signup = signup;