import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';
import { addPet, addNewPet } from '../actions';

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
                <h3>Successfully added your Pet <strong>{props.pet.name}</strong> to the Store.</h3>
            </div>
            <PetDetails {...props.pet}/>
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
        this.clearStatus = this.clearStatus.bind(this);
    }

    clearStatus(e) {
        e.preventDefault();
        this.props.addNewPet();
    }

    render() {
        return (
            <div>
                <Success {...this.props} clearStatus={this.clearStatus}/>
                <NewPet {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    pet: state.pet,
    success: state.pet && state.pet.success
});
export default Connect(mapStateToProps, { addPet, addNewPet })(AddPet)
