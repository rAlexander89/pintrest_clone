
import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions'

// const mSTP = ( { entities: { users } }, { errors, session } ) => ({

// const mSTP = ({ entities: { users, boards }, errors, session }) => {
const mSTP = (state) => {
    debugger
    return{
        user: state.entities.users[state.session.currentUserId],
        boards: Object.values(state.entities.boards),
        errors: state.errors.pin
    }
}

const mDTP = dispatch => ({
    createPin: pin => dispatch(createPin(pin)),
    clearErrors: () => dispatch(clearErrors()),
    // saveToBoard: (boardPin) => dispatch(saveToBoard(boardPin)),
    fetchBoards: () => dispatch(fetchBoards())
    

})

export default connect(mSTP, mDTP)(CreatePinForm);