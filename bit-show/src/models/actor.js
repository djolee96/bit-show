class Actor {
    constructor(castData) {
        this.id = castData.person.id;
        this.name = castData.person.name;
        this.picture = castData.person.image.medium
    }
}
export default Actor