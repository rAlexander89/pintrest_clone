import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';
import Greeting from './greeting';



const mSTP = state => {
    return{
        currentUserUsername: state.session.currentUserUsername
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP, mDTP)(Greeting);
