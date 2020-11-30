import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { clearErrors } from '../../actions/session_actions'
import { fetchUser } from '../../actions/user_action'
import { selectUserPins } from '../../reducers/selector'
import { fetchPins } from '../../actions/pin_actions'

// const mapStateToProps = ({ entities: { users }, session: { currentUserId }, errors }, { match }) => {
// const mapStateToProps = ({ entities, session, errors }, { match }) => {
// const mapStateToProps = (state) => {
const mSTP = ({ entities: { pins, users }, session }, ownProps) => {

    debugger
    return{
        userId: ownProps.match.params.userId,
        currentUserId: users[session.currentUserId].id,
        pins: Object.values(pins)
    }
}

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPins: () => dispatch(fetchPins()),
    clearErrors: () => dispatch(clearErrors),
})

export default connect(mSTP, mDTP)(UserProfile);