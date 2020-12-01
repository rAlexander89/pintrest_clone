import { connect } from 'react-redux';
import { fetchBoard, fetchBoardPins } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions'
import { selectBoardPins } from '../../reducers/selector';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards, pins, boardPins, users }, session, errors }, ownProps) => {
    debugger

    let board_data = ownProps.match.params;
    let board = boards[ownProps.match.params.boardId];
    let owner_id = board ? board_data.userId : undefined;


    return {
        currentUser: users[session.id],
        owner: users[owner_id],
        board,
        board_data,
        boardPins,
        pins: selectBoardPins(boardPins, pins, board_data.boardId)
    }
}
const mDTP = (dispatch) => {
    return {
        fetchBoard: board => dispatch(fetchBoard(board)),
        fetchPins: () => dispatch(fetchPins()),
        fetchBoardPins: () => dispatch(fetchBoardPins()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mSTP, mDTP)(BoardShow)