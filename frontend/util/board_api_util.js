// export const fetchBoards = (userId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/users/${userId}/boards/`
//     })
// };

export const fetchBoards = () => {
    return $.ajax({
        url: '/api/boards',
        method: 'GET'
    })
};



export const fetchBoard = (board) => {
    return $.ajax({
        url: `/api/users/${board.userId}/boards/${board.boardId}`,
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

export const fetchBoardPins = () => {
    return $.ajax({
        url: '/api/board_pins/',
        method: 'GET'
    })
}