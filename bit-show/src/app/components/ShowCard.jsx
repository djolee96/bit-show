import React from 'react';
import { Link } from "react-router-dom"
class ShowCard extends React.Component {

    render() {
        let { id, picture, title, rating } = this.props.showInfo
        if (!picture) {
            picture = { medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg" }
        }
        return (
            <div className="col s12 m6 xl3" >
                <Link to={`/${id}`}>
                    <div className="card" >
                        <div className="card-image" >
                            <img src={picture.medium} alt="" />
                            <span className="btn-floating halfway-fab waves-effect waves-light blue center">  {rating}</span>
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