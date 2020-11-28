
import { connect } from 'react-redux';
import InlineField from './pin_inline_field';
import { updatePin } from '../../actions/pin_actions';
import { updateBoard } from '../../actions/board_actions'


// const mSTP = ( { entities: { users } }, { errors, session } ) => ({

// const mSTP = ({ entities: { users, boards }, errors, session }) => {
const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.currentUserId].id,
        currentUserId: state.session.currentUserId
        // author_id: state.entities.users[state.session.currentUserId].id,
        // boards: Object.values(state.entities.boards),
        // errors: state.errors.pin
    }
}

const mDTP = dispatch => {
    return {
        updatePin: pin => dispatch(updatePin(pin)),
        clearErrors: () => dispatch(clearErrors()),
        updateBoard: board => dispatch(updateBoard(board))
    }
}

export default connect(mSTP, mDTP)(InlineField);