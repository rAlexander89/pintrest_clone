import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';

import PinShow from './pin_show';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        pin: state.entities.pins[ownProps.match.params.pinId]
    }
}

const mDTP = dispatch => {
    return {
        fetchPin: pinId => dispatch(fetchPin(pinId))
        // openModal: modal => dispatch(openModal(modal)),
    }
}


export default connect(mSTP, mDTP)(PinShow)