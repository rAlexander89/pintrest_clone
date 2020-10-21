import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin} from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, errors, session }) => ({
    owner: users[session.currentUserId],
    errors: errors.pins
})

const mapDispatchToProps = dispatch => ({
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    createPin: pin => dispatch(createPin(pin)),
    clearErrors: () => dispatch(clearErrors()),

})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);