import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Nav from './nav/nav';


class App extends Component {

    render() {
        return (
            <div>
                <Header title='Petstore'/>
                <div className="page-content">
                    <div className="wrapper">
                        <Nav/>
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App
