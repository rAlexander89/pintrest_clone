// export const fetchPins  = () => {
//     return $.ajax({
//         method: 'GET',
//         url: '/api/pins',
//     })
// };
    
// export const fetchPin = pinId => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/pins/${pinId}`,
//     })
// }

// export const createPin = pin => {
//     return $.ajax({
//         method: 'PATCH',
//         url: `/api/pins/${pin}`,
//         data: { pin }
//     })
// };

// export const updatePin = pin => {
//     return $.ajax({
//         method: 'PATCH',
//         url: `/api/pins/${pin.id}`,
//         data: { pin }
//     })
// };

// export const deletePin = pinId => {
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/pins/${pinId}`
//     })
// };

export const fetchPins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pins/'
    })
};

export const fetchPin = pinId => {
    return $.ajax({
        method: 'GET',
        url: `/api/pins/${pinId}`
    })
};

export const createPin = pin => {
    return $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: {pin}
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
