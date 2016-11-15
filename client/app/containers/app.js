import React, { Component } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';
import Cookie from 'react-cookie';
import { connect as Connect } from 'react-redux';
import { findUser } from '../actions';

class App extends Component {

    componentDidMount() {
        let username = Cookie.load('username');
        if (username) {
            this.props.findUser(username);
        }
    }

    render() {
        return (
            <div>
                <Header title='Petstore'/>
                <div className="page-content">
                    <div className="wrapper">
                        <Nav loggedin={this.props.loggedin}/>
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({ loggedin: user && user.id ? true: false });

export default Connect(mapStateToProps, { findUser })(App)
