
import * as PinAPIUtil from '../util/pin_api_util';
import { closeModal } from './modal_actions';

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

export const receivePins = pins => {
    
    return{
        type: RECEIVE_PINS,
        pins
    }
}

export const receivePin = data => {
    return {
        type: RECEIVE_PIN,
        pin: data
        // pin: data.pin,
        // owner: data.owner
    }
}


export const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
})

export const receivePinErrors = errors => {
    return{
        type: RECEIVE_PIN_ERRORS,
        errors
    }
}

export const fetchPins = () => dispatch => {
    return PinAPIUtil.fetchPins()
        .then(pins => dispatch(receivePins(pins)),
            error => dispatch(receivePinErrors(error.responseJSON)))
}

export const fetchPin = pinId => dispatch => {
    return PinAPIUtil.fetchPin(pinId)
        .then(pin => dispatch(receivePin(pin))),
        error => dispatch(receivePinErrors(error.responseJSON))
}

export const createPin = pin => dispatch => {
    return PinAPIUtil.createPin(pin)
        .then(pin => dispatch(receivePin(pin)),
            error => dispatch(receivePinErrors(error.responseJSON)))
}

export const updatePin = pin => dispatch => {
    return PinAPIUtil.updatePin(pin)
        .then(pin => dispatch(receivePin(pin)),
            error => dispatch(receivePinErrors(error.responseJSON)))
}

export const deletePin = pinId => dispatch => {
    return PinAPIUtil.deletePin(pinId)
        .then(() => dispatch(removePin(pinId)),
            error => dispatch(receivePinErrors(error.responseJSON)))
}

export const savePinToBoard = (boardPin) => dispatch => {
    return PinAPIUtil.savePinToBoard(boardPin)
        .then(pinId => dispatch(fetchPin(pinId)),
            error => dispatch(receivePinErrors(error.responseJSON)))
}