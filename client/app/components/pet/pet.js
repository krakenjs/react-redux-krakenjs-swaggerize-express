import React, { Component } from 'react';
import { Link } from 'react-router';

class Pet extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
    }

    render() {
        return (
            <div className="thumbnail">
                <Link to={`/details/${this.props.name}`}>
                    <img src={this.props.photoUrls[0]} className="img-responsive" alt={this.props.name} width="200px"/>
                </Link>
                <div className="caption">
                    <h4 className="text-center">{this.props.name}</h4>
                    <button onClick={this.onClick} type="button" className="center-block btn btn-primary marg">Add to Cart</button>
                </div>

            </div>
        );
    }
}
export default Pet
