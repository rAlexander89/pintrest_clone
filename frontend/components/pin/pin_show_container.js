import { connect } from 'react-redux';
import { fetchPin, deletePin } from '../../actions/pin_actions';
// import { fetchUser } from '../../actions/user_action'
import { fetchBoard } from '../../actions/board_actions'
import { fetchPinComments } from '../../actions/comment_actions';
import { getLikes } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions'

import PinShow from './pin_show';

const mSTP = ({ entities: { pins, users, boards, comments, likes }, session }, ownProps) => {

    let pin = pins[ownProps.match.params.pinId]

    debugger
    
    return {
        currentUser: users[session.currentUserId],
        pin,
        comments: Object.values(comments),
        board: boards,
        likes: getLikes(likes, pin),
    }
}

const mDTP = dispatch => {
    return {
        fetchPin: pinId => dispatch(fetchPin(pinId)),
        deletePin: pinId => dispatch(deletePin(pinId)),
        fetchPinComments: pinId => dispatch(fetchPinComments(pinId)),
        fetchBoard: boardId => dispatch(fetchBoard(boardId)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}


export default connect(mSTP, mDTP)(PinShow)