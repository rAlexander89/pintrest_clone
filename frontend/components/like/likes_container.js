import { connect } from 'react-redux';
import { fetchItemLikes } from '../../actions/like_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

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
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like))
    }
}


export default connect(mSTP, mDTP)(Likes)