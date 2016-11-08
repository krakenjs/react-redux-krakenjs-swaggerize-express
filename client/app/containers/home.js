import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';
import Pets from '../components/pets/pets';
import { findAllPets, cart } from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.findAllPets();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Pet store!</h1>
                { this.props.pets && this.props.pets.length > 0 ? <Pets pets={this.props.pets} cart={this.props.cart}/> : null }
            </div>
        )
    }
}

export default Connect(({pets}) => ({pets}), { findAllPets, cart })(Home)
