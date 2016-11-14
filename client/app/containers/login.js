import React from 'react';
import { connect as Connect } from 'react-redux';

const Login = props => (
    <div>
        <a href="/v2/user/login" role="button" className="loginBtn center-block btn btn-lg btn-default">Login using Github</a>
    </div>
)

export default Connect()(Login)
