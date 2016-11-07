import React, { Component } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';

import { connect as Connect } from 'react-redux';

const App = props => (
    <div>
        <Header title='Petstore'/>
        <div className="page-content">
            <div className="wrapper">
                <Nav/>
                {props.children}
            </div>
        </div>
        <Footer/>
    </div>
)

export default Connect()(App)
