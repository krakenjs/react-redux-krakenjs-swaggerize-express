import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';
import PetDetails from '../components/pet_details/petdetails';
import { findPetById } from '../actions';


class Details extends Component {

    componentDidMount() {
        this.props.findPetById(this.props.id);
    }
    render() {
        return (
            <div>
                <h2>Details about { this.props.pet ? this.props.pet.name : '' }</h2>
                { this.props.pet ? <PetDetails {...this.props.pet}/> : null }
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    pet: state.pet,
    id: ownProps.params.id
});

export default Connect(mapStateToProps, { findPetById })(Details)
