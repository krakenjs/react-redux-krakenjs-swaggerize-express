import React, { Component } from 'react';
import CartItem from '../components/cart/cartitem';
import { connect as Connect } from 'react-redux';
import { findPetsFromCart, clearFromCart } from '../actions';

class Cart extends Component {

    componentDidMount() {
        this.props.findPetsFromCart();
    }

    render() {
        let pets = this.props.pets;
        let carItems = ( pets && pets.length > 0) ? (pets.map(pet => (pet && pet.id) ? <CartItem key={pet.id} {...pet} clearFromCart={this.props.clearFromCart}/> : null)) : null;

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
const mapStateToProps = state => ({
    pets: state.pets
});
export default Connect(mapStateToProps, { findPetsFromCart, clearFromCart })(Cart)
