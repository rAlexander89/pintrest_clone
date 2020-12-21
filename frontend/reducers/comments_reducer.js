import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            nextState = action.comments;
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        // case RECEIVE_COMMENT:
        //     return nextState ;
        default:
            return state;
    }
};

export default commentsReducer;