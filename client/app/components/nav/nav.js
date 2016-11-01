import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {

    render() {
        return (
            <nav>
                <ul className="navblock nav nav-pills pagenav">
                    <li key="1" className="active"><a href="#">Home</a></li>
                    <li key="2"><a href="#">Add Pet</a></li>
                    <li key="3"><a href="#">Store</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
