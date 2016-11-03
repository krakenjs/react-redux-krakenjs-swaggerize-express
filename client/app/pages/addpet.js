import React, { Component } from 'react';
import PetForm from '../components/pet_form/form';

class AddPet extends Component {
    render() {
        return (
            <div>
                <h2>Add your pet to the store</h2>
                <PetForm/>
            </div>
        )
    }
}
export default AddPet
