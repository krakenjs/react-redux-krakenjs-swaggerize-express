import React, { Component } from 'react';
import Pet from '../pet/pet';

class Pets extends Component {

    addRow(rowNum) {
        let row = [];
        let startIndex = rowNum * this.props.thumbnailCount;
        for(let i = startIndex; i < startIndex + this.props.thumbnailCount; i++) {
            row.push(
                <div key={i} className="col-sm-6 col-md-4">
                    <Pet {...this.props.pets[i]}/>
                </div>
            );
        }
        return row;
    }

    pets() {
        let pets = [];
        let rowCont = Math.floor(this.props.pets.length/this.props.thumbnailCount);
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
