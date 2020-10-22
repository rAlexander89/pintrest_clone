import * as PinAPIUtil from '../util/pin_api_util';
// '../util/user_api_util.js'

export const RECEIVE_USER = 'RECEIVE_USER';


const receiveUser = pinId => ({
    type: RECEIVE_PIN,
    pinId
});


export const fetchUser = pinId => dispatch => {
    return PinAPIUtil.fetchUser(pinId)
        .then(pin => dispatch(receiveUser(pin)))
}