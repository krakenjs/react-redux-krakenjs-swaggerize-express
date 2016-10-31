import React, { Component } from 'react';
import Pet from '../pet/pet';

class Pets extends Component {

    addRow() {
        let row = [];
        for(let i = 0; i < this.props.thumbnailCount; i++) {
            row.push(
                <div className="col-sm-6 col-md-4">
                    <Pet/>
                </div>
            );
        }
        return row;
    }
    pets() {
        let pets = [];
        let rowCont = Math.floor(this.props.count/this.props.thumbnailCount);
        for(let i = 0; i < rowCont; i++) {
            pets.push(
                <div class="row">
                    {this.addRow()}
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
    count: 6,
    thumbnailCount: 3
}

export default Pets
