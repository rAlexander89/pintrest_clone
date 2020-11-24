import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchBoardPins } from '../../util/board_api_util';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards, users, pins }, session }, ownProps) => {

    let board = boards[ownProps.match.params.boardId];
    let owner_id = board ? board.author_id : undefined;
    debugger

    return {
        currentUser: users[session.id],
        owner: users[owner_id],
        board
    }
}

// const mDTP = dispatch => {
const mDTP = (dispatch, {match: {params}}) => {
    return {
        // fetchBoard: () => dispatch(fetchBoard(params.userId, params.boardId)),
        fetchBoard: () => dispatch(fetchBoard(params.boardId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchBoardPins: () => dispatch(fetchBoardPins())
    }
}


export default connect(mSTP, mDTP)(BoardShow)