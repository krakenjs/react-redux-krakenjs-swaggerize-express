import React, { Component } from 'react';
import { Link } from 'react-router';
import { Observable } from '@reactivex/rxjs';

class Pet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoUrl: (props.photoUrls && props.photoUrls.length > 0) ? props.photoUrls[0]: ''
        }
    }

    componentDidMount() {
        if (this.props.photoUrls && this.props.photoUrls.length > 1) {
            this.imageToggle = Observable.interval(2000)
                .take(this.props.photoUrls.length)
                .repeat(this.props.repeatCount)
                .subscribe((x) => {
                    this.setState({
                        photoUrl: this.props.photoUrls[x]
                    });
                });
        }
    }

    componentWillUnmount() {
        this.imageToggle && this.imageToggle.unsubscribe();
    }

    onClick (cartAction) {
        this.props.cart(cartAction, this.props.id);
    }

    render() {
        return (
            <div className="thumbnail">
                <Link to={`/details/${this.props.id}`}>
                    <img src={this.state.photoUrl} className="img-responsive" alt={this.props.name} width="200px"/>
                </Link>
                <div className="caption">
                    <h4 className="text-center">{this.props.name}</h4>
                    <h5 className="text-center"><strong>Status : </strong> {this.props.status}</h5>
                    <button onClick={this.onClick.bind(this, this.props.cartAction)} type="button" className="center-block btn btn-primary marg">{this.props.cartText}</button>
                </div>
            </div>
        );
    }
}

Pet.defaultProps = {
    repeatCount: 10
};

export default Pet
