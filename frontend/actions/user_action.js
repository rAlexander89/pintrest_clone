import * as UserApiUtil from '../util/user_api_util';
// import * as UserA
// '../util/user_api_util.js'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const SAVE_BOARD_TO_USER = 'SAVE_BOARD_TO_USER';


const receiveUser = pinId => {
    return{
        type: RECEIVE_PIN,
        pinId
    }
};

const receiveAllUsers = users => {
    return{
        type: RECEIVE_ALL_USERS,
        users

    }
}


export const fetchUser = pinId => dispatch => {
    return UserApiUtil.fetchUser(pinId)
        .then(pin => dispatch(receiveUser(pin)))
}

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}