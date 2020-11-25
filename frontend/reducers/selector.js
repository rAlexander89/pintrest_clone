export const selectBoardPins = (boardPins, pins, boardId) => {
    if (Object.values(boardPins).length === 0) return null;
    if (Object.values(pins).length === 0) return null;
    let pinsOnBoard = [];
    Object.values(boardPins).forEach(boardPin => {
        if (boardPin.board_id === parseInt(boardId)){
            pinsOnBoard.push(pins[boardPin.pin_id])
        }
    })
    return pinsOnBoard
}
