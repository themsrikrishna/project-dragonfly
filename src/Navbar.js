import * as React from "react";
import {Link} from "react-router-dom";
import * as M from "materialize-css";

export default class Navbar extends React.Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            //const instances = M.Sidenav.init(elems, {});
            M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div className="white-text">
                <nav>
                    <div className="nav-wrapper grey darken-4">
                        <a href="#!" className="brand-logo center thin">Dragonfly</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down thin">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

        )
    }
}