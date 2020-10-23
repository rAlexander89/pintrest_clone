
import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';

// const mSTP = ( { entities: { users } }, { errors, session } ) => ({

const mSTP = ({ entities: { users }, session }) => {
    return{
        user: users[session.currentUserId]
    }

    // owner: users[session.currentUserId],
    // currentUserUsername: session.currentUserUsername,
    // errors: errors.pins
}

const mDTP = dispatch => ({
    createPin: pin => dispatch(createPin(pin))

})

export default connect(mSTP, mDTP)(CreatePinForm);