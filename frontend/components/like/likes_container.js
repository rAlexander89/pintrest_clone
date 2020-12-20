import { connect } from 'react-redux';
// import { getLikes } from '../../reducers/selectors';
import { fetchItemLikes } from '../../actions/like_actions';

import Likes from './likes';

// const mSTP = ({ entities: { pins, users, boards, comments, likes }, session }, ownProps) => {
const mSTP = ( { entities: { users, likes }, session } ) => {

    return {
        likes: likes,
        currentUserId: users[session.currentUserId].id,
    }
}

const mDTP = dispatch => {
    return {
        fetchItemLikes: likeId => dispatch(fetchItemLikes(likeId)),
    }
}


export default connect(mSTP, mDTP)(Likes)