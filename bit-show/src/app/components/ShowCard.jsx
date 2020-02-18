import React from 'react';
import { Link } from "react-router-dom"
class ShowCard extends React.Component {

    render() {
        const { id, picture, title, rating } = this.props.showInfo
        return (
            <div className="col s12 m6 xl3" >
                <Link to={`/${id}`}>
                    <div className="card" >
                        <div className="card-image" >
                            <img src={picture} alt="" />
                            <span className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">{rating}</i></span>
                        </div>
                        <div className="card-content" >
                            <span className="card-title" >{title}</span>
                        </div>
                    </div>
                </Link>
            </div >
        )
    }
}

export default ShowCard