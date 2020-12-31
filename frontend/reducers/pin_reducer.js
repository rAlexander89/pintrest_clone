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
            let { pin } = action.pin

            return Object.assign({}, state, { [pin.id]: pin })
        case REMOVE_PIN:
            let newState = Object.assign({}, state);
            debugger
            // delete newState[action.pin.Id];
            delete newState[action.pinId];
            return newState;
        default:
            return state;
    }
}


export default PinReducer;