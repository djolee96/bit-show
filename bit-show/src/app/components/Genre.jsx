import React from "react"

class Genre extends React.Component {
    render() {

        return (<span className="genre grey lighten-1">{this.props.genre}</span>)

    }
}

export default Genre