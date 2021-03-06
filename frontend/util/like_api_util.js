export const createLike = like => {
    return $.ajax({
        url: `/api/likes`,
        method: 'POST',
        data: { like }
    })
}

export const deleteLike = like => {
    return $.ajax({
        url: `/api/likes/${like.id}`,
        method: 'DELETE',
        data: { like }
    })
}


export const fetchItemLikes = params  => {
    let { likeable_id } = params
    return $.ajax({
        url: `/api/likes/${likeable_id}`,
        method: 'GET',
        data: { params }
    })
}