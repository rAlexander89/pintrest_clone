import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';

const receivePin = data => {
    return{
        type: RECEIVE_PIN,
        pin: data.pin,
        owner: data.owner
    }
}

const receiveBoardPin = data => {
    return {
        type: RECEIVE_BOARD_PIN,
        data
    }
}

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const removePin = pinId => {
    return{
        type: REMOVE_PIN,
        pinId
    }
};

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
    debugger
    return PinAPIUtil.updatePin(pin)
        .then(pin => dispatch(receivePin(pin)))
}

export const createPin = (pin) => dispatch => {
    return PinAPIUtil.createPin(pin)
        .then(pin => {
            return dispatch(receivePin(pin))
        })
}

export const savePinToBoard = (boardPin) => dispatch => {
    return PinAPIUtil.savePinToBoard(boardPin) 
        .then(thang => {
    
            return dispatch(receiveBoardPin(thang))
        })
        // .then(pinId => dispatch(fetchPin(pinId)))
        // .then(pinId => (fetchPin(pinId)))
        // .then(pin => dispatch(fetchPin(pinId)))
}