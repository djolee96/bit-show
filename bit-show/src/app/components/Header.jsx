import React from 'react';
import { Link } from "react-router-dom"

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="/"> <span className="brand-logo center">BIT SHOW</span></Link>
                </div>
            </nav>
        )
    }
}

export default Header