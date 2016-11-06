import React, { Component } from 'react';
import { Link } from 'react-router';
import PetForm from '../components/pet_form/form';
import PetDetails from '../components/pet_details/petdetails';
import './pages.css';

let Success = (props) => {
    if (!props.success) {
        return null;
    }
    return (
        <div>
            <div className="alert alert-success alert-dismissible" role="alert">
                <h3>Successfully added your Pet <strong>{props.name}</strong> to the Store.</h3>
            </div>
            <PetDetails {...props}/>
            <button onClick={props.clearStatus} type="button" className="addpetmargin center-block btn btn-primary marg">Add another Pet</button>
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
        .then(resp => resp.json())
        .then(resp => this.setState(Object.assign(resp, { success: true })))
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
