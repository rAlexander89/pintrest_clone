import * as UserApiUtil from '../util/user_api_util';


export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const SAVE_BOARD_TO_USER = 'SAVE_BOARD_TO_USER';

export const receiveUserErrors = errors => {
    return{
        type: RECEIVE_USER_ERRORS,
        errors
    }
}

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