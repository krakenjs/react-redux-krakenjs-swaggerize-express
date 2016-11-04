import React, { Component } from 'react';
import { Link } from 'react-router';
import PetForm from '../components/pet_form/form';

let Success = (props) => {
    if (!props.success) {
        return null;
    }
    return (
        <div>
            <h2> Successfully added the Pet to the Store.</h2>
            <a href="#" onClick={props.clearStatus} to="addPet">Add another Pet</a>
        </div>
    );
};

let NewPet = (props) => {
    if (props.success) {
        return null;
    }
    return (
        <div>
            <h2>Add your pet to the store</h2>
            <PetForm addPet={props.addPet}/>
        </div>
    );
};

class AddPet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
        this.addPet = this.addPet.bind(this);
        this.clearStatus = this.clearStatus.bind(this);
    }

    addPet(name, photoUrl) {

        //TODO Input validation
        fetch('/v2/pet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                photoUrls: [photoUrl],
            })
        })
        .then(resp => this.setState({success: true}))
        .catch(err => console.log(err));
    }

    clearStatus(e) {
        e.preventDefault();
        this.setState({
            success: false
        });
    }

    render() {
        return (
            <div>
                <Success success={this.state.success} clearStatus={this.clearStatus}/>
                <NewPet success={this.state.success} addPet={this.addPet}/>
            </div>
        )
    }
}
export default AddPet
