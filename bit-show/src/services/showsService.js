import { http } from "./HttpService"

function fetchShows() {
    const url = "https://api.tvmaze.com/shows"
    return (http.get(url))
}
function fetchSingleShow(id) {
    let url = `https://api.tvmaze.com/shows/${id}?embed=cast`
    return (http.get(url))
}

function fetchSearchShow(query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    return (http.get(url))
}

export { fetchShows, fetchSingleShow, fetchSearchShow }