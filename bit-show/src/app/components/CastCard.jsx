import React from "react"

class CastCard extends React.Component {
    render() {
        const { name, picture } = this.props.actor
        return (
            <div className="col s4 m4 xl2">
                <div className="card">
                    <div className="card-image">
                        <img src={picture} alt="" />
                        <span className="card-title">{name}</span>
                    </div>
                </div>
            </div>
        )

    }
}

export default CastCard