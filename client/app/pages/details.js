import React, { Component } from 'react';
import PetDetails from '../components/pet_details/petdetails';
const FIND_PET_API = '/v2/pet/';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: { photoUrls: [] }
        };
    }

    componentDidMount() {
        //TODO Move to redux state management
        fetch(`${FIND_PET_API}${this.props.params.id}`)
            .then(resp => resp.json())
            .then(resp => this.setState({pet: resp}))
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <h2>Details about {this.state.pet.name}</h2>
                <PetDetails {...this.state.pet}/>
            </div>
        )
    }
}

export default Details
