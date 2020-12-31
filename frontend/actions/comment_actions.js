
import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveComment = data => {
    return {
        type: RECEIVE_COMMENT,
        pin_id: data.pin_id,
        user_id: data.user_id
    }
}

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = pinId => dispatch => {

    return CommentAPIUtil.fetchComments(pinId)
        .then(comments => dispatch(receiveComments(comments))
        )
}

export const fetchPinComments = pinId => dispatch => {
    return CommentAPIUtil.fetchPinComments(pinId)
        .then(comments => dispatch(receiveComments(comments)))
}

export const fetchComment = commentId => dispatch => {
    return CommentAPIUtil.fetchComments(commentId)
        .then(comment => dispatch(receiveComments(comment))
        )
}


export const createComment = comment => dispatch => {
    comment
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComments(comment))
        )
}

export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment))
        )
};

export const deleteComment = (commentId) => (dispatch) => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId))
        )
};
