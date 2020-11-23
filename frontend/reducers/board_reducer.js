import { RECEIVE_BOARDS, RECEIVE_BOARD } from '../actions/board_actions';
// import { RECEIVE_BOARD } from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARDS:
            debugger
            return action.boards;
            case RECEIVE_BOARD:
            debugger
            return Object.assign({}, state, { [action.board.id]: action.board })
        default:
            return state;
    }
}

export default boardsReducer;