import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:   
        debugger             
        return Object.assign({}, state, { [action.board.id]: action.board })
        // return Object.assign({}, state, action.board )
        // return Object.assign({}, state, action.board )
        case REMOVE_BOARD:
            let newState = Object.assign({}, state);
            debugger
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default boardsReducer;