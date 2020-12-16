import { RECEIVE_COMMENTS } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            nextState = action.comments;
            return nextState;
        default:
            return state;
    }
};

export default commentsReducer;