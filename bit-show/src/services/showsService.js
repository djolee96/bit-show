import { http } from "./HttpService"

function fetchShows() {
    const url = "http://api.tvmaze.com/shows"
    return (http.get(url))
}
function fetchSingleShow(id) {
    let url = `http://api.tvmaze.com/shows/${id}?embed=cast`
    return (http.get(url))
}

export { fetchShows, fetchSingleShow }