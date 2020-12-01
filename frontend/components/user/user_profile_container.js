import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { clearErrors } from '../../actions/session_actions'
import { fetchUser } from '../../actions/user_action'
import { selectUserPins, selectUserBoards } from '../../reducers/selector'
import { fetchPins } from '../../actions/pin_actions'
import { fetchBoards } from '../../actions/board_actions'

// const mapStateToProps = ({ entities: { users }, session: { currentUserId }, errors }, { match }) => {
// const mapStateToProps = ({ entities, session, errors }, { match }) => {
// const mapStateToProps = (state) => {
const mSTP = ({ entities: { pins, users, boards }, session }, ownProps) => {
    let userId = ownProps.match.params.userId

    return{
        userId: ownProps.match.params.userId,
        currentUser: users[session.currentUserId],
        pins: Object.values(pins),
        boards: Object.values(boards),
        userBoards: selectUserBoards(userId, boards)
    }
}

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPins: () => dispatch(fetchPins()),
    clearErrors: () => dispatch(clearErrors),
    fetchBoards: () => dispatch(fetchBoards())
})

export default connect(mSTP, mDTP)(UserProfile);



// import { connect } from 'react-redux';
// import { fetchBoards, createBoard } from '../../actions/board_actions';
// import { selectUserBoards } from '../../reducers/selector';
// import UsersBoardsIndex from './users_boards';

// // const mSTP = (state) => {
// const mSTP = ({ entities: { users, boards }, session }, ownProps) => {
//     // const mSTP = ({ entities: { users, boards }, session }, ownProps) => {
//     debugger
//     // let userBoards;
//     let userId = ownProps.match.params.userId
//     return {
//         boards: Object.values(boards),
//         currentUser: users[session.currentUserId],
//         userId: ownProps.match.params.userId,
//         userBoards: selectUserBoards(userId, boards)
//     }
// }

// const mDTP = dispatch => {
//     return {
//         createBoard: board => dispatch(createBoard(board)),
//         fetchBoards: () => dispatch(fetchBoards())
//     }
// }

// export default connect(mSTP, mDTP)(UsersBoardsIndex);
