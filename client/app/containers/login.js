import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';
import * as SERVICES from '../constants/services';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoginGroup: false
        };
        this.githubUsername = this.githubUsername.bind(this);
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }

    login (e) {
        e.preventDefault();
        window.location.href = `${SERVICES.LOGIN}?username=${this.state.ghUsername}`
    }

    onChange (e) {
        this.setState({
            ghUsername : e.target.value
        });
    }

    githubUsername(e) {
        e.preventDefault();
        this.setState({
            showLoginGroup: !this.state.showLoginGroup
        });
    }

    twitterOAuth(e) {
        e.preventDefault();

    }

    render() {
        let loginGroup = this.state.showLoginGroup ?
        (
            <div className ="addpetmargin">
                <p>First try the local database to find the user. If no records are found, use Github Oauth.</p>
                <div className="input-group">
                    <input value={this.state.ghUsername} onChange={this.onChange} type="text" className="form-control" placeholder="Github username"/>
                    <span className="input-group-btn">
                        <button onClick={this.login} className="btn btn-primary" type="button">Login!</button>
                    </span>
                </div>
            </div>
        ) : null;

        return (
            <div>
                <a href="#" onClick={this.githubUsername} role="button" className="loginBtn center-block btn btn-lg btn-default">Login using Github Username</a>
                {loginGroup}
                <a href={ SERVICES.LOGIN } role="button" className="addpetmargin loginBtn center-block btn btn-lg btn-default">Login using Github OAuth</a>

                <a href="#" onClick={this.twitterOAuth} role="button" className="addpetmargin loginBtn center-block btn btn-lg btn-default">Login using TwitterOAuth</a>
            </div>
        )
    }
}

export default Login
