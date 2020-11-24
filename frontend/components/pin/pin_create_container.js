
import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin, savePinToBoard } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions'

// const mSTP = ( { entities: { users } }, { errors, session } ) => ({

// const mSTP = ({ entities: { users, boards }, errors, session }) => {
const mSTP = (state) => {
    debugger
    return{
        user: state.entities.users[state.session.currentUserId],
        author_id: state.entities.users[state.session.currentUserId].id,
        boards: Object.values(state.entities.boards),
        errors: state.errors.pin
    }
}

const mDTP = dispatch => {
    return{
        createPin: pin => dispatch(createPin(pin)),
        clearErrors: () => dispatch(clearErrors()),
        savePinToBoard: boardPin => dispatch(savePinToBoard(boardPin)),
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(mSTP, mDTP)(CreatePinForm);