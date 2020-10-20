import React from 'react';
import { connect } from 'react-redux';
// import Splash from './splash';
import Splash from './splash.jsx';

const mSTP = ({session, entities: {users }}) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => {
    return {
        hello: 'hello'
    };
};

export default connect(mSTP, mDTP)(Splash)