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
    let boardData = {
        author_id: ownProps.match.params.userId,
        board_id: ownProps.match.params.boardId
    } 

    let pinData = {
        pin_id: ownProps.match.params.pinId,
        author_id: ownProps.match.params.userId,
        board_id: ownProps.match.params.boardId
    }


    
    return {
        currentUser: users[session.currentUserId],
        boardData: boardData,
        pin: pins[ownProps.match.params.pinId],
        pinData: pinData,
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