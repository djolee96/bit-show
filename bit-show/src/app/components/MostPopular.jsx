import React from 'react';
import ShowCard from "./ShowCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import { fetchShows, fetchSearchShow } from "../../services/showsService";
import Show from "../../models/show";

class MostPopular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            searchShows: [],
            isLoaded: false
        }
    }
    searchShows = (query) => {
        fetchSearchShow(query)
            .then(shows => {
                this.setState({ searchShows: shows.map(show => new Show(show.show)), isLoaded: true })
            })
    }


    componentDidMount() {
        fetchShows()
            .then(shows => {
                shows.length = 50
                this.setState({ shows: shows.map(show => new Show(show)), isLoaded: true })
            })
    }

    render() {
        const { shows, searchShows } = this.state
        let displayShows = shows
        if (!!searchShows.length) {
            displayShows = searchShows
        }
        return (
            <div className="row">
                <SearchBar onSearch={this.searchShows} />
                {this.state.isLoaded ?
                    displayShows.map(show => <ShowCard showInfo={show} key={show.id} />) :
                    <Loader />
                }
            </div>
        )
    }
}

export default MostPopular