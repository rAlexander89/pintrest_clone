import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const mSTP = state => {
  return {
    formType: 'login',
    loginInfo:{
      username: '',
      password: ''
    },
    navLink: <Link to="/signup">No account? Sign Up!</Link>,
    errors: state.errors.session
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
