import { connect } from 'react-redux';
import { fetchBoards, createBoard } from '../../actions/board_actions';
import { selectUserBoards } from '../../reducers/selector';
import UsersBoardsIndex from './users_boards';


const mSTP = ({ entities: { users, boards }, session }, ownProps) => {

    let userId = ownProps.match.params.userId 
    return {
        boards: Object.values(boards),
        currentUser: users[session.currentUserId],
        userId: ownProps.match.params.userId,
        userBoards: selectUserBoards(userId, boards)
    }
}

const mDTP = dispatch => {
    return {
        createBoard: board => dispatch(createBoard(board)),
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(mSTP, mDTP)(UsersBoardsIndex);
