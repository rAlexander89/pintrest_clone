import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createBoard } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';
import BoardCreate from './board_create';

const mSTP = (state) => {
    return{
         currentUser: state.entities.users[state.session.currentUserId]
    };
};

const mDTP = dispatch => {
    return{
        createBoard: board => dispatch(createBoard(board))
    }
}

export default connect(mSTP, mDTP)(BoardCreate);