import { connect } from 'react-redux';
import { fetchBoard, fetchBoardPins } from '../../actions/board_actions';
import { selectBoardPins } from '../../reducers/selector';

import BoardShow from './board_show';

// const mSTP = ({ entities: { boards, boardPins, users, pins }, session }, {match: {params}}, ownProps) => {

const mSTP = ({ entities: { boards, pins, boardPins, users }, session, errors }, ownProps) => {

    let board = boards[ownProps.match.params.boardId];
    let owner_id = board ? board.author_id : undefined;

    return {
        currentUser: users[session.id],
        owner: users[owner_id],
        board,
        board_Id: ownProps.match.params.boardId,
        pins,
        boardPins
        // pins: selectBoardPins(boardPins, pins, parseInt(ownProps.match.params.boardId))
        // pins: selectBoardPins(boardPins, pins, board.id)
    }
}

// const mDTP = dispatch => {
const mDTP = (dispatch, {match: {params}}) => {
    return {
        // fetchBoard: () => dispatch(fetchBoard(params.userId, params.boardId)),
        fetchBoard: () => dispatch(fetchBoard(params.boardId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchBoardPins: () => dispatch(fetchBoardPins()),
        selectBoardPins: (boardPins, pins, boardId) => dispatch(selectBoardPins(boardPins, pins, boardId))
    }
}


export default connect(mSTP, mDTP)(BoardShow)