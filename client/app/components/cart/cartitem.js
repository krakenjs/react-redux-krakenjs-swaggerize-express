import React, {Component} from 'react';

class CartItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img width="100px" src={this.props.photoUrls[0]} alt={this.props.name} className="img-rounded"/>
                </td>
                <td>
                    <strong>{this.props.name}</strong>
                </td>
                <td>
                    <button type="button" className="btn btn-primary marg">Remove from Cart</button>
                </td>
            </tr>
        )
    }
}

export default CartItem
