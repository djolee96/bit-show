import React from 'react';
import year from "../../shared/curentYear"
class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer blue">
                <div className="footer-copyright">
                    <div className="container">
                        © {year()} Copyright Text
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer