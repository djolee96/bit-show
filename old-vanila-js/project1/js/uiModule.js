const uiModule = (function () {
    function displaySeries(seriesLists) {
        const seriesContainer = $("<div>")
        seriesContainer.addClass("row")

        for (let i = 0; i < seriesLists.length; i++) {
            const div = $("<div>")
            const img = $("<img>")
            const span = $("<span>")
            img.attr("src", seriesLists[i].img)
            img.attr("width", "100%")
            img.attr("height", "550px")
            span.text(seriesLists[i].title)
            div.addClass("col-xl-4 showOne")
            div.attr('data-i', seriesLists[i].id)
            div.append(img)
            div.append(span)
            seriesContainer.append(div)
        }
        $(".shows").append(seriesContainer)
    }
    function showId() {
        const id = $(".showOne").attr("data-i")
        return id
    }
    function del() {
        $(".shows").empty()
    }
    function displayInfo(seriesOne) {
        $(".shows").empty()
        //container
        const infoContainer = $("<div>")
        infoContainer.addClass("row")
        const blankInfo = $("<div>")
        blankInfo.addClass("col-xl-2")
        const info = $("<div>")
        info.addClass("col-xl-12")
        //image
        const banner = $("<img>")
        banner.attr("width", "50%")
        banner.attr("src", seriesOne.img)
        //title
        const title = $("<h1>")
        title.text(seriesOne.title)
        //season dates
        const seasons = $("<p>")
        seasons.text(`Seasons( ${seriesOne.numberOfSeasons} )`)
        const dates = $("<ul>")
        for (let i = 0; i < seriesOne.seasons.length; i++) {
            const liItem = $("<li>")
            liItem.text(`Season ${i + 1} premiere: ${seriesOne.seasons[i].premiereDate} Season ${i + 1} finale: ${seriesOne.seasons[i].endDate}`)
            dates.append(liItem)
        }
        // cast list
        const cast = $("<p>")
        cast.text("Cast")
        const castList = $("<ul>")
        for (let i = 0; i < seriesOne.cast.length; i++) {
            const castLiItem = $("<li>")
            castLiItem.text(seriesOne.cast[i].person.name)
            castList.append(castLiItem)
        }
        // description
        const details = $("<div>")
        const showDetails = $("<h1>")
        showDetails.text("Show Details")
        details.html(seriesOne.description)
        // Season info and cast List container
        const seasonsAndCast = $("<div>")
        seasonsAndCast.addClass("seasonsAndCast")
        seasonsAndCast.append(seasons)
        seasonsAndCast.append(dates)
        seasonsAndCast.append(cast)
        seasonsAndCast.append(castList)

        //adding elements to page
        info.append(title)
        info.append(banner)
        info.append(seasonsAndCast)
        info.append(showDetails)
        info.append(details)
        infoContainer.append(info)

        $(".shows").append(infoContainer)
    }
    function searchCollect() {
        var input = $(".search").val()
        return input
    }
    function displaySearch(showList) {
        console.log(showList)
        const drop = $(".drop")
        const dropItem = $("<li>")

        for (let i = 0; i < showList.length; i++) {
            dropItem.text(showList[i].title)
            dropItem.attr("data-id", showList[i].id)
            drop.append(dropItem);
        }
    }
    return {
        displaySeries,
        showId,
        displayInfo,
        del,
        searchCollect,
        displaySearch
    }


})()