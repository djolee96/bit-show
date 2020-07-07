const controllerModule = (function (data, ui) {

    function seriesShow(seriesList) {
        ui.displaySeries(seriesList)

        const showList = $(".showOne")
        showList.each(function (i, show) {

            $(show).on("click", showInfo)
        })
    }
    $(".bit").on("click", reloadPage)
    function reloadPage() {
        ui.del()
        data.fetchSeries(seriesShow)
    }
    function init() {
        data.fetchSeries(seriesShow)
    }
    function seriesInfo(seriesOne) {
        ui.displayInfo(seriesOne)
    }
    function showInfo(event) {
        const el = event.currentTarget
        const id = $(el).attr('data-i')
        data.fetchSeriesInfo(id, seriesInfo)
    }
    $(".search").on("keyup", searchInput)
    function searchInput() {
        const name = ui.searchCollect()
        data.fetchSearch(name, searchSeries)
    }
    function searchSeries(showList) {
        ui.displaySearch(showList)
    }
    // showInfo()
    return {
        init
    }

})(dataModule, uiModule)
