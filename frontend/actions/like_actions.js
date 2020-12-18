import * as LikeAPIUtil from '../util/like_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

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
    return (LikeAPIUtil.createLike(like))
        .then(like => dispatch(receiveLike(like)))
}

export const deleteLike = (like) => dispatch => {
    return (LikeAPIUtil.deleteLike(like))
        .then(() => dispatch(removeLike(like)))
}