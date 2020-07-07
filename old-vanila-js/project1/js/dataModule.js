const dataModule = (function () {

    function fetchSeries(onSuccessI) {

        const url = "http://api.tvmaze.com/shows"
        $.get(url, function (data) {
            const list = data
            const mySeries = []
            for (let i = 0; i < 50; i++) {
                const series = new Series(list[i].image.original, list[i].name, list[i].id)
                mySeries.push(series)
            }
            onSuccessI(mySeries)
        })

    }
    function fetchSeriesInfo(id, onSuccessII) {
        const url = "http://api.tvmaze.com/shows/" + id + "?embed[]=seasons&embed[]=cast"

        console.log(url);
        $.get(url, function (data) {
            const show = data
            const showOne = new Series(show.image.original, show.name, show.id, show.summary, show._embedded.seasons.length, show._embedded.seasons, show._embedded.cast)
            console.log(showOne);
            onSuccessII(showOne)
        })
    }
    function fetchSearch(name, onSuccessIII) {
        const url = "http://api.tvmaze.com/search/shows?q=" + name
        $.get(url, function (data) {
            const show = data
            const showList = []
            for (let i = 0; i < 10; i++) {
                const showSearch = new Series(show[i].show.image, show[i].show.name, show[i].show.id)
                showList.push(showSearch)
            }
            console.log(showList)
            onSuccessIII(showList)
        })
    }

    class Series {
        constructor(img, title, id, description, numberOfSeasons, seasons, castLists) {
            this.img = img
            this.title = title
            this.id = id
            this.description = description
            this.numberOfSeasons = numberOfSeasons
            this.seasons = seasons
            this.cast = castLists

        }
    }

    return {
        fetchSeries,
        fetchSeriesInfo,
        fetchSearch

    }

})()


