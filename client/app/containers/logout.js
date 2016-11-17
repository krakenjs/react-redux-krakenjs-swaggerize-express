import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';
import * as SERVICES from '../constants/services';
import { logout } from '../actions';

class Logout extends Component {

    componentDidMount() {
        this.props.logout();
    }


    render() {

        let alert = this.props.loggedout === true ?
        (
            <div className="alert alert-info" role="alert">
                Successfully logged out user {this.props.name}
            </div>
        ) :
        (
            <div className="alert alert-danger" role="alert">
                Unable to log out user {this.props.name}
            </div>
        );

        return (
            <div>
                {alert}
            </div>
        )
    }
}
const mapStateToProps = ({loggedout, name}) => ({ loggedout, name });

export default Connect(mapStateToProps, { logout })(Logout)
