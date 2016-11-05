import React, { Component } from 'react';
import PetDetails from '../components/pet_details/petdetails';

class Details extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h2>Details about {this.props.params.name}</h2>
                <PetDetails/>
            </div>
        )
    }
}

export default Details
