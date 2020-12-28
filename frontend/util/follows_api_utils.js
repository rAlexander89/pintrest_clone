export const follow = follow => {
    return $.ajax({
        url: "/api/follows",
        method: "POST",
        data: {follow}
    })
}
export const unfollow = followId => {
    return $.ajax({
        url: `/api/follows/${followId}`,
        method: "DELETE"
        })
}
export const fetchAllFollows = () => {
    return $.ajax({
        url: `/api/follows`,
        method: "GET",
    })
}