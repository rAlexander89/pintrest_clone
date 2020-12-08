
import { connect } from 'react-redux';
import InlineField from './pin_inline_field';
import { updatePin } from '../../actions/pin_actions';
import { updateBoard } from '../../actions/board_actions'


const mSTP = (state) => {
    return {
        currentUserId: state.session.currentUserId
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