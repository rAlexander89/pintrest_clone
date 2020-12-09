
import { connect } from 'react-redux';
import Splash from './splash.jsx';

const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.currentUserId],
    };
};

const mDTP = dispatch => {
    return {
    };
};

export default connect(mSTP, mDTP)(Splash)