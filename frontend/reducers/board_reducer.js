import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            // return Object.assign({}, state, action.board )
            // return Object.assign({}, state, action.board )
            let { board } = action.board
            
            // mewState = Object.assign({}, action.board.id = action.board)
            // newState[action.board.id] = action.board
            newState =  Object.assign({}, state, { [action.board.id]: action.board })
            return newState
        case REMOVE_BOARD:
            let newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default boardsReducer;