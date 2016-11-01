import React, { Component } from 'react';
import Pets from '../components/pets/pets';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Pet store application!</h1>
                <Pets/>
            </div>
        )
    }
}
export default Home
