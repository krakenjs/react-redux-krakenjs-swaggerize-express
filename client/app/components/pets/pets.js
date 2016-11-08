import React, { Component } from 'react';
import Pet from '../pet/pet';

class Pets extends Component {

    addRow(rowNum) {
        let row = [];
        let startIndex = rowNum * this.props.thumbnailCount;
        let endIndex = startIndex + this.props.thumbnailCount;
        endIndex = (endIndex > this.props.pets.length) ? this.props.pets.length : endIndex;
        for(let i = startIndex; i < endIndex; i++) {
            row.push(
                <div key={this.props.pets[i].id} className="col-sm-6 col-md-4">
                    <Pet {...this.props.pets[i]} cart={this.props.cart}/>
                </div>
            );
        }
        return row;
    }

    pets() {
        let pets = [];
        if (this.props.pets && this.props.pets.length > 0) {
            let rowCont = Math.ceil(this.props.pets.length/this.props.thumbnailCount);
            for(let i = 0; i < rowCont; i++) {
                pets.push(
                    <div key={i} className="row">
                        {this.addRow(i)}
                    </div>
                );
            }
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
