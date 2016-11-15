import * as ACTIONS from '../constants/actiontypes';
import * as SERVICES from '../constants/services';
import * as C from '../constants';
import { getCart, inCart, addToCart, removeFromCart } from './cart';
import * as API from './api';
import Cookie from 'react-cookie';

const cartText = (action) => {
    if (action === ACTIONS.ADD_TO_CART) {
        return 'Add to Cart';
    }
    return 'Remove from Cart';
}

const cartAction = (id) => {
    return inCart(id) ? ACTIONS.REMOVE_FROM_CART: ACTIONS.ADD_TO_CART;
}

export const cart = (currentAction, id) => dispatch => {
    let newAction;
    if (currentAction === ACTIONS.ADD_TO_CART) {
        newAction = addToCart(id) ? ACTIONS.REMOVE_FROM_CART : ACTIONS.ADD_TO_CART;
    } else {
        newAction = removeFromCart(id) ? ACTIONS.ADD_TO_CART : ACTIONS.REMOVE_FROM_CART
    }
    return dispatch({
        type: newAction,
        cartText: cartText(newAction),
        id
    });
}
export const clearFromCart = (id) => dispatch => {
    removeFromCart(id);
    return dispatch({
        type: ACTIONS.CLEAR_FROM_CART,
        id
    });
}

export const findPetsFromCart = () => dispatch => {
    let cart = getCart();
    if (cart) {
        let cartItems = cart.split(C.CART_SEPARATOR);
        let pets = cartItems.map(id => API.fetchPetById(id));
        return Promise.all(pets)
            .then(responses => dispatch({
                type: ACTIONS.FIND_PETS_FROM_CART,
                cart: responses
            }));
    }

    return dispatch({
        type: ACTIONS.FIND_PETS_FROM_CART,
        cart: []
    });
}

export const findAllPets = () => dispatch => API.fetchAllPets().then(resp => dispatch({
    type: ACTIONS.FIND_ALL_PETS,
    pets: resp.map(pet => {
        let action = cartAction(pet.id);
        return {
            ...pet,
            cartAction: action,
            cartText: cartText(action)
        };
    })
}));

export const findPetById = (id) => dispatch => API.fetchPetById(id).then(resp => dispatch({
    type: ACTIONS.FIND_PET_BY_ID,
    pet: resp
}));

export const addPet = (name, photoUrl) => dispatch => API.addPet({
        name: name,
        photoUrls: [photoUrl]
    }).then(resp => dispatch({
        type: ACTIONS.ADD_PET,
        pet: { ...resp, success: true }
    }));

export const addNewPet = () => dispatch => dispatch({
    type: ACTIONS.ADD_NEW_PET,
    pet: { success: false }
});

export const findUser = username => dispatch => API.findUser(username)
    .then(resp => dispatch({
        type: ACTIONS.FIND_USER,
        user: resp
    }));

export const logout = () => dispatch => {
    let loggedout = false;
    let username = Cookie.load('username');
    if (username) {
        Cookie.remove('username', { path: '/' });
        loggedout = true;
    }
    return dispatch({
        type: ACTIONS.LOG_OUT,
        loggedout
    });
};
