import React from 'react';
import { connect as Connect } from 'react-redux';
import * as SERVICES from '../constants/services';

const Login = props => (
    <div>
        <a href={ SERVICES.LOGIN } role="button" className="loginBtn center-block btn btn-lg btn-default">Login using Github</a>
        <a href="#" role="button" className="addpetmargin loginBtn center-block btn btn-lg btn-default">Login using Twitter</a>
    </div>
)

export default Connect()(Login)
