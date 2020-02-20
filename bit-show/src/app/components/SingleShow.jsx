import React from "react"
import { fetchSingleShow } from "../../services/showsService"
import Show from "../../models/show"
import Actor from "../../models/actor"
import Genre from "./Genre"
import CastCard from './CastCard'
import filterString from "../../shared/filterString"
import Loader from "./Loader";

class SingleShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: {},
            actors: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        fetchSingleShow(id)
            .then(show => {
                const actors = show._embedded.cast
                actors.length = 6
                this.setState({ isLoaded: true, show: new Show(show), actors: actors.map(actor => new Actor(actor)) }
                )
            }
            )
    }
    render() {
        let { picture, title, genres = [], summary = "" } = this.state.show
        const actors = this.state.actors
        const isLoaded = this.state.isLoaded
        if (!isLoaded) {
            <Loader />
        }
        if (!picture) {
            picture = { medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg" }
        }
        return (<div className="row">
            <div className="col s12 m6 xl5">
                <div className="card single">
                    <div className="card-image">
                        <img src={picture.medium} alt="" />
                    </div>
                </div>
            </div>
            <div className="col s12 m6 xl6 offset-xl1">
                <h3 className="card-title">{title}</h3>
                {genres.map((genre) => <Genre genre={genre} />)}
                <div className="about">{filterString(summary, ['<p>', '</p>', '<b>', '</b>'])}</div>   {/* problem with <p></p> <b></b>from api */}
            </div>
            <div className="col s12 m12 xl12">
                <div className="row">
                    {actors.map(actor => <CastCard actor={actor} key={actor.id} />)}
                </div>
            </div>

        </div>)

    }
}

export default SingleShow