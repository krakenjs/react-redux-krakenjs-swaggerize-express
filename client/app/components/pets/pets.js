import React, { Component } from 'react';
import Pet from '../pet/pet';
const FIND_PETS_API = '/v2/pet/findByStatus?status=available&status=sold&status=pending';

class Pets extends Component {

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
            .then(resp => {
                this.setState({
                    pets: resp
                });
            })
            .catch(error => console.log(error));
    }

    addRow(rowNum) {
        let row = [];
        let startIndex = rowNum * this.props.thumbnailCount;
        for(let i = startIndex; i < startIndex + this.props.thumbnailCount; i++) {
            row.push(
                <div key={i} className="col-sm-6 col-md-4">
                    <Pet {...this.state.pets[i]}/>
                </div>
            );
        }
        return row;
    }
    pets() {
        let pets = [];
        let rowCont = Math.floor(this.state.pets.length/this.props.thumbnailCount);
        for(let i = 0; i < rowCont; i++) {
            pets.push(
                <div key={i} className="row">
                    {this.addRow(i)}
                </div>
            );
        }
        return pets;
    }

    render() {
        return (
            <div>
                {this.pets()}
            </div>
        )
    }
}

Pets.defaultProps = {
    thumbnailCount: 3
}

export default Pets
