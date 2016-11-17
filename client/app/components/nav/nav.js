import React, {Component} from 'react';
import { Link } from 'react-router';
import './nav.css';

class Nav extends Component {

    render() {
        let loggedin = this.props.loggedin;
        let disabledClz = loggedin ? '' : 'disabled';
        let disabledStyle = loggedin ? {} : { pointerEvents: 'none' };
        let loginRoute = loggedin ? 'logout' : 'login';
        let loginTxt = loggedin ? 'Logout' : 'Login';
        return (
            <nav>
                <ul id="petnav" className="navblock nav nav-pills pagenav">
                    <li key="1" ><Link onlyActiveOnIndex={true} activeClassName="active" to="/">Home</Link></li>
                    <li key="2"><Link activeClassName="active" to="cart">Cart</Link></li>
                    <li key="3" className={ disabledClz }><Link style={disabledStyle} activeClassName="active" to="addpet">Add Pet</Link></li>
                    <li key="4" className={ disabledClz }><Link style={disabledStyle} activeClassName="active" to="profile">Profile</Link></li>
                    <li style={{ float: 'right' }} key="5"><Link activeClassName="active" to={loginRoute}>{ loginTxt }</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
