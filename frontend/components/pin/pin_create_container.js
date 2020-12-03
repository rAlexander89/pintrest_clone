
import { connect } from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions'

const mSTP = (state) => {


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