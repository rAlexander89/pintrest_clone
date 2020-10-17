import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

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
        signupUser: (user) => dispatch(signup(user)),
        loginUser: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
