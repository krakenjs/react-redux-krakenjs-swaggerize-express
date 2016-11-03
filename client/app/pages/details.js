import React, { Component } from 'react';

class PetDetails extends Component {
    render() {
        return (
            <h2>This is details page about  {this.props.params.name}</h2>
        )
    }
}

export default PetDetails
