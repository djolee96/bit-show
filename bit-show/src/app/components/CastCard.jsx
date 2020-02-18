import React from "react"

class CastCard extends React.Component {
    render() {
        const { name, picture } = this.props.actor
        return (
            <div class="col s4 m4 xl2">
                <div class="card">
                    <div class="card-image">
                        <img src={picture} alt="" />
                        <span class="card-title">{name}</span>
                    </div>
                </div>
            </div>
        )

    }
}

export default CastCard