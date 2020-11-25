export const selectBoardPins = (boardPins, pins, boardId) => {
    console.log('we are now in selectBoardPins')
    debugger
    if (Object.values(boardPins).length === 0) return [];
    // let pinIds = [];
    let pinsOnBoard = [];
    Object.values(boardPins).forEach(boardPin => {
        debugger
        if (boardPin.board_id === boardId) {
            debugger
            pinsOnBoard.push(pins[boardPin.pin_id])
        }
    })
    return pinsOnBoard
}
