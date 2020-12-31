export const fetchBoards = () => {
    return $.ajax({
        url: '/api/boards',
        method: 'GET'
    })
};

export const fetchBoard = (board) => {
    return $.ajax({
        url: `/api/users/${board.author_id}/boards/${board.board_id}`,
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

export const updateBoard = (board) => {
    return $.ajax({
        url: `/api/users/${board.author_id}/boards/${board.id}`,
        method: "PATCH",
        data: { board }
    })
}

export const deleteBoard = (boardData) => {
    let user_id = boardData.author_id
    let id = boardData.board_id
    return $.ajax({
        // url: `/api/users/${boardData.author_id}/boards/${boardData.board_id}`,
        url: `/api/users/${user_id}/boards/${id}`,
        method: "DELETE"
    })
}

export const fetchBoardPins = board_id => {
    return $.ajax({
        url: '/api/board_pins/',
        method: 'GET',
        data: { board_id }
    })
}