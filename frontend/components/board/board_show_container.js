import { connect } from 'react-redux';
import { fetchBoard, fetchBoardPins, deleteBoard } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions'
import { fetchUsers } from '../../actions/user_action'
import { selectBoardPins } from '../../reducers/selectors';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards, pins, users }, session, errors }, ownProps) => {

    let board_data = ownProps.match.params;
    let board = boards[ownProps.match.params.boardId];
    let owner_id = board ? board_data.userId : undefined;
    let all_pins = pins

    return {
        currentUser: users[session.currentUserId],
        owner: users[owner_id],
        board,
        board_data,
        pins: pins,
        thisBoardsPins: selectBoardPins(all_pins, board_data.boardId)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBoard: board => dispatch(fetchBoard(board)),
        deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(BoardShow)