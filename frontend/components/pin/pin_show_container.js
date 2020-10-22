import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';

import PinShow from './pin_show';

const mSTP = ({ entities: {pins, users}, session}, ownProps) => {

    let pin = pins[ownProps.match.params.pinId];
    let owner_id = pin ? pin.author_id : undefined;

    return {
        currentUser: users[session.id],
        owner: users[owner_id],
        pin
    }
}

const mDTP = dispatch => {
    return {
        fetchPin: pinId => dispatch(fetchPin(pinId)),
        // openModal: modal => dispatch(openModal(modal)),
    }
}


export default connect(mSTP, mDTP)(PinShow)