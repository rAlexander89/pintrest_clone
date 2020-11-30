import { connect } from 'react-redux';
import { fetchBoards, fetchAllBoards } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/user_action'
import AllUserBoards from './all_user_boards'
import { selectUserIds } from '../../reducers/selector'

const mSTP = (state) => {
    let users = state.entities.users
    let userIds = selectUserIds(users)
    let allBoards = fetchAllBoards(userIds)
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        users,
        // userIds: selectUserIds(users),
        // allBoards: fetchAllBoards(userIds)
        userIds,
        allBoards
    };
};

const mDTP = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchBoards: userId => dispatch(fetchBoards(userId)),
        fetchAllBoards: userIds => dispatch(fetchAllBoards(userIds))
    }
}

export default connect(mSTP, mDTP)(AllUserBoards);