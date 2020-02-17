import { http } from "./HttpService"

function showsService() {
    const url = "http://api.tvmaze.com/shows"
    return (http.get(url))
}

export default showsService