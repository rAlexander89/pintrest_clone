import * as UserApiUtil from '../util/user_api_util';
// import * as UserA
// '../util/user_api_util.js'

export const RECEIVE_USER = 'RECEIVE_USER';
export const SAVE_BOARD_TO_USER = 'SAVE_BOARD_TO_USER'


const receiveUser = pinId => ({
    type: RECEIVE_PIN,
    pinId
});



export const fetchUser = pinId => dispatch => {
    return UserApiUtil.fetchUser(pinId)
        .then(pin => dispatch(receiveUser(pin)))
}