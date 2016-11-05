import React, { Component } from 'react';
import { Link } from 'react-router';
import PetForm from '../components/pet_form/form';

let Success = (props) => {
    if (!props.success) {
        return null;
    }
    return (
        <div>

            <div className="alert alert-success" role="alert">
                <h3>Successfully added your Pet {props.name} to the Store.</h3>
            </div>
            <a href="#" onClick={props.clearStatus}>Add another Pet</a>
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
        .then(resp => this.setState({
            name: name,
            success: true
        }))
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
                <Success {...this.state} clearStatus={this.clearStatus}/>
                <NewPet {...this.state} addPet={this.addPet}/>
            </div>
        )
    }
}
export default AddPet
