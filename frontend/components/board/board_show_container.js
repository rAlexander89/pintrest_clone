import { connect } from 'react-redux';
import { fetchBoard, fetchBoardPins } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions'
import { selectBoardPins } from '../../reducers/selector';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards, pins, boardPins, users }, session, errors }, ownProps) => {

    let board = boards[ownProps.match.params.boardId];
    let owner_id = board ? board.author_id : undefined;

    return {
        currentUser: users[session.id],
        owner: users[owner_id],
        board,
        boardPins,
        pins: selectBoardPins(boardPins, pins, ownProps.match.params.boardId),
    }
}
const mDTP = (dispatch, {match: {params}}) => {
    return {
        fetchBoard: () => dispatch(fetchBoard(params.boardId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchBoardPins: () => dispatch(fetchBoardPins())
    }
}


export default connect(mSTP, mDTP)(BoardShow)