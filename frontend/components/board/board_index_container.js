import { connect } from 'react-redux';
import { fetchBoards, createBoard } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mSTP = ({ entities: boards }, {session: currentUserId }) => {
    return{
        boards: Object.values(boards),
        currentUserId
    }
}

const mDTP = dispatch => {
    return{
        createBoard: board => dispatch(createBoard(board)),
        fetchBoards: () => dispatch(fetchBoards(params.userId))
    }
}

export default connect(mSTP,mDTP)(BoardIndex);