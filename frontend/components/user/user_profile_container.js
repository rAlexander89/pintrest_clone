import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { clearErrors } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_action'

const mapStateToProps = ({ entities: { users }, session: { currentUserId }, errors }, { match }) => ({
    currentUser: users[match.params.userId],
    errors,
    currentUserId
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearErrors: () => dispatch(clearErrors),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);