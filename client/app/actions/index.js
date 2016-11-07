import * as ACTIONS from '../constants/actiontypes';
import * as SERVICES from '../constants/services';
import { inCart, addToCart, removeFromCart } from './cart';

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
        id: id
    });
}

const fetchAllPets = (dispatch) => fetch(SERVICES.FIND_PETS_API)
    .then(resp => resp.json())
    .then(resp => dispatch({
            type: ACTIONS.FIND_ALL_PETS,
            pets: resp.map(pet => {
                let action = cartAction(pet.id);
                return {
                    ...pet,
                    cartAction: action,
                    cartText: cartText(action)
                };
            })
    }))
    .catch(error => console.log(error));

const fetchPetById = (id, dispatch) => fetch(`${SERVICES.FIND_PET_API}${id}`)
    .then(resp => resp.json())
    .then(resp => dispatch({
            type: ACTIONS.FIND_PET_BY_ID,
            pet: resp
    }))
    .catch(error => console.log(error));


const addPetAPI = (pet, dispatch) => fetch(SERVICES.ADD_PET, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: pet.name,
            photoUrls: pet.photoUrls,
        })
    })
    .then(resp => resp.json())
    .then(resp => dispatch({
        type: ACTIONS.ADD_PET,
        pet: { ...resp, success: true }
    }))
    .catch(err => console.log(err));

export const findAllPets = () => dispatch => fetchAllPets(dispatch);

export const findPetById = (id) => dispatch => fetchPetById(id, dispatch);

export const addPet = (name, photoUrl) => dispatch => addPetAPI({
        name: name,
        photoUrls: [photoUrl]
    }, dispatch);

export const addNewPet = () => dispatch => dispatch({
    type: ACTIONS.ADD_NEW_PET,
    pet: { success: false }
});
