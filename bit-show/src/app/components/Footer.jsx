import React from 'react';
import year from "../../shared/curentYear"
class Footer extends React.Component {
    render() {
        return (
            <footer class="page-footer blue">
                <div class="footer-copyright">
                    <div class="container">
                        © {year()} Copyright Text
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer