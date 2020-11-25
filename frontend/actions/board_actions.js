import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";

export const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
})

export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
})

export const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
})

export const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
})

export const receiveBoardPins = boardPins => {
    return{
        type: RECEIVE_BOARD_PINS,
        boardPins
    }
}

export const fetchBoards = (userId) => dispatch => {
    return BoardAPIUtil.fetchBoards(userId)
        .then(boards => dispatch(receiveBoards(boards)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}


export const fetchBoard = (boardId) => dispatch => {
    return BoardAPIUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const createBoard = board => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const fetchBoardPins = () => dispatch => {
    console.log('we are now in the fetchBoardPins board_actions')
    return BoardAPIUtil.fetchBoardPins()
        .then(boardPins => dispatch(receiveBoardPins(boardPins)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}