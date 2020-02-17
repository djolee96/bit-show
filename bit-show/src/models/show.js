class Show {
    constructor(showData) {
        this.id = showData.id;
        this.title = showData.name;
        this.picture = showData.image.medium
        this.rating = showData.rating.average
    }
}
export default Show