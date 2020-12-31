import { connect } from 'react-redux';
import { fetchBoard, fetchBoardPins, deleteBoard } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions'
import { fetchUsers, fetchUser } from '../../actions/user_action'
import { selectBoardPins } from '../../reducers/selectors';

import BoardShow from './board_show';

const mSTP = ({ entities: { boards, users, boardPins }, session, errors }, ownProps) => {

    let board_data = ownProps.match.params;

    return {
        currentUser: users[session.currentUserId],
        author: users[ownProps.match.params.userId],
        board: boards,
        board_data,
        boardPins
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBoard: board => dispatch(fetchBoard(board)),
        fetchBoardPins: board => dispatch(fetchBoardPins(board)),
        deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(BoardShow)