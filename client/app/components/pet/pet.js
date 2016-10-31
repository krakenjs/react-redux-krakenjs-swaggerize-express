import React, { Component } from 'react';

class Pet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html_url: '',
            avatar_url: '',
            name: 'Brad'
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {

    }
    render() {
        return (
            <div className="thumbnail">
                <a href={this.state.html_url}>
                    <img src={this.state.avatar_url} className="img-responsive" alt={this.state.name} width="200px"/>
                </a>
                <div className="caption">
                    <h4 className="text-center">{this.state.name}</h4>
                    <button onClick={this.onClick} type="button" className="center-block btn btn-primary marg">Add to Cart</button>
                </div>

            </div>
        );
    }
}
export default Pet
