import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/session_actions';


const mSTP = state => {
  return {
    formType: 'login',
    switchForm: 'signup',
    loginInfo: {
      username: '',
      password: ''
    },
    errors: state.errors.session
  };
};


const mDTP = dispatch => {
  return {
    loginUser: (user) => dispatch(login(user)),
    signupUser: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
