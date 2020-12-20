
import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKES } from "../actions/like_actions";
// import { RECEIVE_PINS } from "../actions/pin_actions";


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKES:
                    nextState[action.like.id] = action.likes
            return nextState;
        case RECEIVE_LIKE:
                    nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.like.id]
            return nextState;
        // case RECEIVE_PINS:
        //     debugger
        //             return Object.assign(nextState, action.pins.likes)
        default:
            return state;
    }
}

export default likesReducer;