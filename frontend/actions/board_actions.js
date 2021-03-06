import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
// export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS"; 
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";


export const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
})

export const receiveBoard = board => {
    return{
        type: RECEIVE_BOARD,
        board
    }
}

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

export const fetchBoards = () => dispatch => {
    return BoardAPIUtil.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const fetchBoard = board => dispatch => {

    return BoardAPIUtil.fetchBoard(board)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const createBoard = board => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const updateBoard = board => dispatch => {
    return BoardAPIUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const deleteBoard = (userId, boardId) => dispatch => {

    return BoardAPIUtil.deleteBoard(userId, boardId)
        .then(() => dispatch(removeBoard(boardId)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}

export const fetchBoardPins = boardData => dispatch => {
    return BoardAPIUtil.fetchBoardPins(boardData)
        .then(boardPins => dispatch(receiveBoardPins(boardPins)),
            error => dispatch(receiveBoardErrors(error.responseJSON)))
}