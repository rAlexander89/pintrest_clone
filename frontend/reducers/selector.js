
// export const selectBoardPins = (boardPins, pins, boardId) => {
export const selectBoardPins = (pins, boardId) => {
    // if (Object.values(boardPins).length === 0) return null;
    if (Object.values(pins).length === 0) return null;
    let pinsOnBoard = [];
    // Object.values(boardPins).forEach(boardPin => {
    Object.values(pins).forEach(pin => {
        debugger
        if (pin.board_id === parseInt(boardId)){
            // if (!!pins[pin.pin_id]){
                // pinsOnBoard.push(pins[pin.pin_id])
                pinsOnBoard.push(pin)
            }
        // }
    })
    debugger
    return pinsOnBoard
}

export const selectUserIds = (users) => {
    if (Object.values(users).length <= 1) return null;
    let allUsers = Object.values(users)
    let userIds = []
    allUsers.forEach(user => {
        userIds.push(user.id)
    })

    return userIds
}

export const selectUserBoards = (userId, boards) => {
    if (boards === undefined ) return null
    let userBoards = []
    Object.values(boards).forEach(board => {

          if (board.author_id == userId) {
              userBoards.push(board)
          }
    })
    return userBoards

}

