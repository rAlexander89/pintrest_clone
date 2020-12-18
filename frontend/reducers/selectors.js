
export const selectBoardPins = (pins, boardId) => {
    if (!pins) return null;
    // if (Object.values(pins).length === 0) return null;
    let pinsOnBoard = [];
    Object.values(pins).forEach(pin => {
        if (pin.board_id === parseInt(boardId)){
                pinsOnBoard.push(pin)
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

export const selectUserBoards = (userId, boards) => {
    if (!userId || !boards ) return null
    let userBoards = []
    Object.values(boards).forEach(board => {
          if (board.author_id == userId) {
              userBoards.push(board)
          }
    })
    return userBoards

}


export const getLikes = (likesFromEntities, item) => {
    if ( !likesFromEntities || !item) return null;
    let likes = [];
    // debugger
    let type = item.author_id ? 'Pin' : 'Comment';

    Object.values(likesFromEntities).forEach(like => {
        if (like.liked_id === item.id && like.type_liked === type) {
            likes.push(like)
        }
    })

    return likes
}