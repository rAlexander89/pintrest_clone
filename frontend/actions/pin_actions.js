// import * as PinApiUtil from '../util/pin_api_util';


// export const RECEIVE_PIN = 'RECEIVE_PIN';
// export const RECEIVE_PINS = 'RECEIVE_PINS';
// export const REMOVE_PIN = 'REMOVE_PIN';

// const receivePins = payload => {
//     return{
//         type: RECEIVE_PINS,
//         payload
//     }
// }

// const receivePin = payload => {
//     return{
//         type: RECEIVE_PIN,
//         payload
//     }
// }


// const removePin = payload => {
//     return{
//         type: REMOVE_PIN,
//         payload
//     }
// }

// export const fetchPins = () => dispatch => {
//     return PinApiUtil.fetchPins()
//         .then(pins => dispatch(receivePins(pins)))
// }

// // export const fetchPin = payload => dispatch => {
// //     return PinApiUtil.fetchPin(payload)
// //         .then(pin => {
// //             debugger
// //             return dispatch(receivePin(pin))
// //         })
// // }
// export const fetchPin = pinId => dispatch => {
//     return PinApiUtil.fetchPin(pinId)
//         .then(pinId => {
//             debugger
//             return dispatch(receivePin(pinId))
//         })
// }

// export const createPin = payload => dispatch => {
//     return PinApiUtil.createPin(payload)
//         .then(pin => dispatch(receivePin(pin)))
// }

// export const updatePin = payload => dispatch => {
//     return PinApiUtil.updatePin(payload)
//         .then(pin => dispatch(receivePin(pin)))
// }

// export const deletePin = payload => dispatch => {
//     return PinApiUtil.deletePin(payload)
//         .then(() => dispatch(removePin(pinId)))
// }

import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});

export const fetchPin = pinId => dispatch => {
    return PinAPIUtil.fetchPin(pinId)
        .then(pin => dispatch(receivePin(pin)))
}

export const fetchPins = () => dispatch => {
    return PinAPIUtil.fetchPins()
        .then(pins => dispatch(receivePins(pins)))
}

export const deletePin = (pinId) => dispatch => {
    return PinAPIUtil.deletePin(pinId)
        .then(pin => dispatch(removePin(pin.id)))
}

export const updatePin = (pin) => dispatch => {
    return PinAPIUtil.updatePin(pin)
        .then(pin => dispatch(receivePin(pin)))
}

export const createPin = (pin) => dispatch => {
    return PinAPIUtil.createPin(pin)
        .then(pin => {
            return dispatch(receivePin(pin))
        })
}