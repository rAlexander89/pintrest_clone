import { connect } from 'react-redux';
import { fetchBoards, createBoard } from '../../actions/board_actions';
import BoardIndex from './board_index';

// const mSTP = ({ entities: boards }, {session: currentUserId }) => {
const mSTP = (state) => {
    return{
        boards: Object.values(state.entities.boards),
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mDTP = dispatch => {
    return{
        createBoard: board => dispatch(createBoard(board)),
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(mSTP,mDTP)(BoardIndex);