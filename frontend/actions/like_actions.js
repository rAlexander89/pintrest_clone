import * as LikeAPIUtil from '../util/like_api_util'

export const RECEIVE_LIKES = 'RECEIVE_LIKES'
export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'


const receiveLikes = likes => {
    return ({
        type: RECEIVE_LIKES,
        likes
    })
}


const receiveLike = like => {
    return ({
        type: RECEIVE_LIKE,
        like
    })
}

const removeLike = like => {
    return ({
        type: REMOVE_LIKE,
        like
    })
}

export const createLike = (like) => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
}

export const deleteLike = (like) => dispatch => {
    return LikeAPIUtil.deleteLike(like)
        .then(() => dispatch(removeLike(like)))
}

export const fetchItemLikes = params => dispatch => {
    return LikeAPIUtil.fetchItemLikes(params)
        .then(likes => dispatch(receiveLikes(likes)))
}