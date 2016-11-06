import React, { Component } from 'react';
import { Link } from 'react-router';
import { Observable } from '@reactivex/rxjs';

const CART_SEPARATOR = ';';
const CART_KEY = 'cart';

const ACTION = {
    ADD: {
        name: 'add',
        text: 'Add to Cart'
    },
    REMOVE: {
        name: 'remove',
        text: 'Remove from Cart'
    }
};

class Pet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: this.inCart() ? ACTION.REMOVE : ACTION.ADD,
            status: props.status,
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

    cart(actionName) {
        if (actionName === ACTION.ADD.name) {
            return this.addToCart() ? ACTION.REMOVE : ACTION.ADD;
        }
        return this.removeFromCart() ? ACTION.ADD : ACTION.REMOVE;
    }

    inCart() {
        if (localStorage) {
            let cart = localStorage.getItem(CART_KEY);
            if (cart) {
                let cartItems = cart.split(CART_SEPARATOR);
                if (cartItems && cartItems.length > 0) {
                    //Check if the pet exist in the cart
                    if (cartItems.includes(`${this.props.id}`)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    addToCart() {
        if (localStorage) {
            let cart = localStorage.getItem(CART_KEY);
            if (cart) {
                //If the pet exist in the cart do nothing
                if (this.inCart()) {
                    return false;
                }
                //Add the separator
                cart = `${cart}${CART_SEPARATOR}`;
            } else {
                cart = '';
            }
            //Add the pet to cart
            cart = `${cart}${this.props.id}`;
            localStorage.setItem(CART_KEY, cart);
            return true;
        }
        return false;
    }

    removeFromCart() {
        if (localStorage) {
            let cart = localStorage.getItem(CART_KEY);
            if (cart) {
                if (this.inCart()) {
                    let cartItems = cart.split(CART_SEPARATOR);
                    cartItems = cartItems.filter(id => id !== `${this.props.id}`);
                    localStorage.setItem(CART_KEY, cartItems.join(CART_SEPARATOR));
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    onClick (action, e) {
        let newAction = this.cart(action);
        this.setState({
            action: newAction
        });
    }

    render() {
        return (
            <div className="thumbnail">
                <Link to={`/details/${this.props.id}`}>
                    <img src={this.state.photoUrl} className="img-responsive" alt={this.props.name} width="200px"/>
                </Link>
                <div className="caption">
                    <h4 className="text-center">{this.props.name}</h4>
                    <h5 className="text-center"><strong>Status : </strong> {this.state.status}</h5>
                    <button onClick={this.onClick.bind(this, this.state.action.name)} type="button" className="center-block btn btn-primary marg">{this.state.action.text}</button>
                </div>
            </div>
        );
    }
}

Pet.defaultProps = {
    repeatCount: 10
};

export default Pet
