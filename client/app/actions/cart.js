import * as C from '../constants';

export const getCart = () => {
    if (localStorage) {
        return localStorage.getItem(C.CART_KEY);
    }
}
export const inCart = (id) => {
    if (localStorage) {
        let cart = getCart();
        if (cart) {
            let cartItems = cart.split(C.CART_SEPARATOR);
            if (cartItems && cartItems.length > 0) {
                //Check if the pet exist in the cart
                if (cartItems.includes(`${id}`)) {
                    return true;
                }
            }
        }
    }
    return false;
}

export const addToCart = (id) => {
    if (localStorage) {
        let cart = getCart();
        if (cart) {
            //If the pet exist in the cart do nothing
            if (inCart(`${id}`)) {
                return false;
            }
            //Add the separator
            cart = `${cart}${C.CART_SEPARATOR}`;
        } else {
            cart = '';
        }
        //Add the pet to cart
        cart = `${cart}${id}`;
        localStorage.setItem(C.CART_KEY, cart);
        return true;
    }
    return false;
}

export const removeFromCart = (id) => {
    if (localStorage) {
        let cart = getCart();
        if (cart) {
            if (inCart(`${id}`)) {
                let cartItems = cart.split(C.CART_SEPARATOR);
                cartItems = cartItems.filter(cartId => cartId !== `${id}`);
                localStorage.setItem(C.CART_KEY, cartItems.join(C.CART_SEPARATOR));
                return true;
            }
            return false;
        }
    }
    return false;
}
