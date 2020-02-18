import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }

    }
    onInputHandler = (e) => {
        const query = e.target.value
        const { onSearch } = this.props
        this.setState({ query })
        onSearch(query)
    }

    render() {
        return (<nav>
            <div className="nav-wrapper white">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search Show" required onChange={this.onInputHandler} value={this.state.query} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>)

    }
}

export default SearchBar