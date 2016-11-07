import React, { Component } from 'react';
import CartItem from '../components/cart/cartitem';

const FIND_PET_API = '/v2/pet/';
const CART_SEPARATOR = ';';
const CART_KEY = 'cart';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pets : []
        };
    }

    componentDidMount() {
        //TODO Move to redux state management
        if(localStorage) {
            let cart = localStorage.getItem(CART_KEY);
            if (cart) {
                let cartItems = cart.split(CART_SEPARATOR);
                let pets = cartItems.map(id => fetch(`${FIND_PET_API}${id}`));
                Promise.all(pets)
                    .then(responses => Promise.all(responses.map(resp => resp.json())))
                    .then(responses => this.setState({pets: responses}))
                    .catch(error => console.log(error));
            }
        }
    }



    render() {

        let carItems = this.state.pets.map(pet => (pet && pet.id) ? <CartItem key={pet.id} {...pet}/> : null);

        return (
            <div>
                <h3>Petstore Cart</h3>
                <div>
                    <table className="table table-striped">
                        <tbody>
                            {carItems}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Cart
