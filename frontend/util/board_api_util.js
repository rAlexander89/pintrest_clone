export const fetchBoards = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/boards/`
    })
};

export const fetchBoard = (boardId) => {
    return $.ajax({
        url: `/api/boards/${boardId}`,
        method: "GET"
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: `/api/users/${board.author_id}/boards`,
        method: "POST",
        data: { board }
    })
}

export const fetchBoardPins = () => {
    return $.ajax({
        url: '/api/board_pins/',
        method: 'GET'
    })
}