class Show {
    constructor(showData) {
        this.id = showData.id;
        this.title = showData.name;
        this.picture = showData.image.medium
        this.rating = showData.rating.average
        this.genres = showData.genres
        this.summary = showData.summary

    }
}
export default Show