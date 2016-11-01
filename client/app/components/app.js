import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Nav from './nav/nav';
import Pets from './pets/pets';

class App extends Component {

    render() {
        return (
            <div>
                <Header title='Petstore'/>
                <div className="page-content">
                    <div className="wrapper">
                        <Nav/>
                        <h1>Welcome to Pet store application!</h1>
                        <Pets/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App
