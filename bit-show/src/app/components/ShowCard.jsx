import React from 'react';

class ShowCard extends React.Component {

    render() {
        const { id, picture, title, rating } = this.props.showInfo
        return (
            <div className="col s12 m6 xl3" >
                <div className="card" id={id}>
                    <div className="card-image">
                        <img src={picture} alt="" />
                        <a className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">{rating}</i></a>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowCard