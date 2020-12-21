
import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKES } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            debugger
                    nextState[action.like.id] = action.like
            return nextState;
            return action.like
        case REMOVE_LIKE:
            delete nextState[action.like.id]
            return nextState;
        default:
            return state;
    }
}

export default likesReducer;