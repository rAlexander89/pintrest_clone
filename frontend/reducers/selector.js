export const selectBoardPins = (boardPins, pins, boardId) => {
    console.log('we are now in selectBoardPins')
    if (Object.values(boardPins).length === 0) return [];
    let pinsOnBoard = [];
    debugger
    Object.values(boardPins).forEach(boardPin => {
        if (boardPin.board_id === parseInt(boardId)){
            pinsOnBoard.push(pins[boardPin.pin_id])
        }
    })
    debugger
    return pinsOnBoard
}
