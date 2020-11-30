import { fetchAllBoards } from '../actions/board_actions'

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

export const selectUserIds = (users) => {
    if (Object.values(users).length <= 1) return null;
    let allUsers = Object.values(users)
    let userIds = []
    allUsers.forEach(user => {
        userIds.push(user.id)
    })

    return userIds
   

}

