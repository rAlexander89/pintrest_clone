import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../actions/pin_actions';

// const PinReducer = (oldState={}, action) => {
//     Object.freeze(oldState);
//     let newState = Object.assign({}, oldState);

//     switch (action.type){
//         case RECEIVE_PINS:
//             // newState = action.pins;
//             newState = action.payload;
//             return newState;
//         case RECEIVE_PIN:
//             newState[action.pin.id] = action.pin;
//             // newState[action.payload.pins.id] = action.payload.pins;
//             newState[action.payload.pin.id] = action.payload.pin;
//             debugger
//             return newState;
//         case REMOVE_PIN:
//             delete newState[action.pinId]
//             return newState;
//         default:
//             return oldState;
//     }
// }

// }
// const PinReducer = (state = {}, action) => {
//     Object.freeze(state);

//     switch (action.type) {
//         case RECEIVE_PINS:
//             return Object.assign({}, state, action.pins)
//         case RECEIVE_PIN:
//             return { [action.pin.id]: action.pin }
//         case REMOVE_PIN:
//             let newState = Object.assign({}, state);
//             delete newState[action.pinId];
//             return newState;
//         default:
//             return state;
//     }
// }

// const PinReducer = (state = {}, action) => {
//     Object.freeze(state);

//     switch (action.type) {
//         case RECEIVE_PIN:
//             return { [action.payload.pin.id]: action.pin }
//         case RECEIVE_PINS:
//             return Object.assign({}, state, action.payload.pins)
//         case REMOVE_PIN:
//             let newState = Object.assign({}, state);
//             delete newState[action.payload.pinId];
//             return newState;
//         default:
//             return state;
//     }
// }


const PinReducer = (state = {}, action) => {
    Object.freeze(state);
    // console.log('pin reducer')
    switch (action.type) {
        case RECEIVE_PINS:
            return Object.assign({}, state, action.pins)
        case RECEIVE_PIN:
            return Object.assign({}, state, { [action.pin.id]: action.pin })
        case REMOVE_PIN:
            let newState = Object.assign({}, state);
            delete newState[action.pinId];
            return newState;
        default:
            return state;
    }
}


export default PinReducer;