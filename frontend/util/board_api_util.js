// export const fetchBoards = (userId) => {
//     debugger
//     return $.ajax({
//         url: `/api/users/${userId}/board`,
//         method: "GET"
//     })
// }

export const fetchBoards = (userId) => {
    debugger
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

// export const fetchMyBoards = (author_id) => {
//     return $.ajax({
//         url: 
//     })
// }

export const createBoard = (board) => {
    debugger
    return $.ajax({
        // url: `/api/users/${board.author_id}/board`,
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

export const fetchMyBoards = (userId) => {
    return $.ajax({
        url: '/api/' ,
        methid: 'GET'
    })
}

