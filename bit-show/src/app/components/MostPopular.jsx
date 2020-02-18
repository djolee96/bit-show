import React from 'react';
import ShowCard from "./ShowCard";
import Loader from "./Loader";
import { fetchShows } from "../../services/showsService";
import Show from "../../models/show";

class MostPopular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            isLoaded: false,

        }
    }
    componentDidMount() {
        fetchShows()
            .then(shows => {
                shows.length = 50
                this.setState({ shows: shows.map(show => new Show(show)), isLoaded: true })
            })
    }
    render() {
        return (
            <div className="row">
                {this.state.isLoaded ?
                    this.state.shows.map(show => <ShowCard showInfo={show} key={show.id} />) :
                    <Loader />
                }
            </div>
        )
    }
}

export default MostPopular