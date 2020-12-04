import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../actions/pin_actions';

const PinReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PINS:
            return Object.assign({}, state, action.pins)
        case RECEIVE_PIN:
            return Object.assign({}, state, { [action.pin.id]: action.pin })
        case REMOVE_PIN:
            debugger
            let newState = Object.assign({}, state);
            debugger
            delete newState[action.pinId];
            debugger
            return newState;
        default:
            return state;
    }
}


export default PinReducer;