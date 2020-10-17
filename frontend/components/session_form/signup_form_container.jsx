import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mSTP = state => {
    return {
        formType: 'signup',
        switchForm: 'login',
        loginInfo: {
            email: '',
            username: '',
            password: ''
        },
        // navLink: <Link to="/login">Have an account? Sign in!</Link>,
        errors: state.errors.session
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
