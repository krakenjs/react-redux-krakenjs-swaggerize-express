import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header title='Petstore'/>
                <div className="page-content">
                    <div className="wrapper">
                        <h1>Welcome to Pet store application!</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App
