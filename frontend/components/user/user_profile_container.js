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


