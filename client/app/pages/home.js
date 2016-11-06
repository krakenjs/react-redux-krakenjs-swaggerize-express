import React, { Component } from 'react';
import Pets from '../components/pets/pets';
const FIND_PETS_API = '/v2/pet/findByStatus?status=available&status=sold&status=pending';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        };
    }

    componentDidMount() {
        //TODO Move to redux state management
        fetch(FIND_PETS_API)
            .then(resp => resp.json())
            .then(resp => this.setState({pets: resp}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>Welcome to Pet store application!</h1>
                <Pets {...this.state}/>
            </div>
        )
    }
}
export default Home
