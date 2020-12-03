import React from 'react';
import { connect } from 'react-redux';
// import Splash from './splash';
import Splash from './splash.jsx';
import { fetchPins } from '../../actions/pin_actions'

// const mSTP = ({session, entities: { users, pins }}) => {
const mSTP = (state) => {

    return {
        // currentUser: users[session.id],
        // pins: pins
        currentUser: state.entities.users[state.session.currentUserId],
        pins: Object.values(state.entities.pins)
    };
};


const mDTP = dispatch => {
    return {
        fetchPins: () => dispatch(fetchPins())
    };
};

export default connect(mSTP, mDTP)(Splash)