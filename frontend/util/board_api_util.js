export const fetchBoards = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/board`,
        method: "GET"
    })
}

export const fetchBoard = (userId, boardId) => {
    return $.ajax({
        url: `/api/users/${userId}/board/${boardId}`,
        method: "GET"
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: `/api/users/${board.user_id}/board`,
        method: "POST",
        data: { board }
    })
}

export const fetchBoardPins = () => {
    return $.ajax({
        url: '/api/board_pins',
        method: 'GET'
    })
}



