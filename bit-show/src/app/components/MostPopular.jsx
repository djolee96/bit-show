import React from 'react';
import ShowCard from "./ShowCard"
import showsService from "../../services/showsService"
import Show from "../../models/show"
class MostPopular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
    }
    componentDidMount() {
        showsService()
            .then(shows => {
                shows.length = 50
                this.setState({ shows: shows.map(show => new Show(show)) })
            })
    }
    render() {
        return (
            <div className="row">
                {this.state.shows.map(show => <ShowCard showInfo={show} key={show.id} />)}
            </div>
        )
    }
}

export default MostPopular