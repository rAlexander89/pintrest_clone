export const fetchPins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pins/'
    })
};

export const fetchPin = pinId => {
    return $.ajax({
        url: `/api/users/${pinId.author_id}/boards/${pinId.board_id}/pins/${pinId.pin_id}`,
        method: 'GET'
    })
};

export const createPin = (pin) => {
    return $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: pin,
        contentType: false,
        processData: false
    })
};

export const updatePin = pin => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/pins/${pin.id}`,
        data: { pin }
    })
};

export const deletePin = pinId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/pins/${pinId}`
    })
};

export const savePinToBoard = (board_pin) => {
    return $.ajax({
        url: '/api/board_pins',
        method: 'POST',
        data: { board_pin }
    })
}