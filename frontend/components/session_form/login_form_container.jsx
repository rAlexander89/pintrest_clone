// import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

// const mSTP = state => {
//   return {
//     formType: 'login',
//     switchForm: 'signup',
//     loginInfo:{
//       username: '',
//       password: ''
//     }, 
//     // navLink: <Link to="/signup">No account? Sign Up!</Link>,
//     errors: state.errors.session
//   };
// };

const mSTP = state => {
  return {
    formType: 'login',
    switchForm: 'signup',
    loginInfo: {
      username: '',
      password: ''
    },
    // navLink: <Link to="/signup">No account? Sign Up!</Link>,
    errors: state.errors.session
  };
};

// return currentUser ? personalGreeting() : sessionLinks();

const mDTP = dispatch => {
  return {
    loginUser: (user) => dispatch(login(user)),
    signupUser: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
