export const fetchBoards = (userId) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/boards/`
    })
};

export const fetchBoard = (userId, boardId) => {
    return $.ajax({
        url: `/api/users/${userId}/boards/${boardId}`,
        method: "GET"
    })
}


export const createBoard = (board) => {
    debugger
    return $.ajax({
        url: `/api/users/${board.author_id}/boards`,
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