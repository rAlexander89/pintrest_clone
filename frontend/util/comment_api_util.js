export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";


export const fetchComments = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/comments/'
    })
};

export const fetchComment = pinId => {
    return $.ajax({
        method: 'GET',
        url: `/api/comments/${pinId}`
    })
};

export const fetchPinComments = pinId => {
    return $.ajax({
        method: 'GET',
        url: `/api/pins/${pinId}/comments`
    })
}

export const createComment = (comment) => {
    
    return $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: comment,
        contentType: false,
        processData: false
    })
};

export const updateComment = comment => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
};

export const deleteComment = commentId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
};
