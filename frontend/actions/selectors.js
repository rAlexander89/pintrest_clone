export const selectBoardPins = (boardPins, pins, boardId) => {

    if Object.values(boardPins).length === 0 return [];

    let pinsOnBoard = [];

    Object.values(boardPins).forEach( pin => { 
        if (pin.boardId === boardId){
            pinsOnBoard.push(pin)
        }
    })
    
}