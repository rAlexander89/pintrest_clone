
import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';

const mSTP = ({ errors, session }) => ({
    // owner: users[session.currentUserId],
    currentUserUsername: session.currentUserUsername,
    errors: errors.pins
})

const mDTP = dispatch => ({
    createPin: pin => dispatch(createPin(pin))

})

export default connect(mSTP, mDTP)(CreatePinForm);