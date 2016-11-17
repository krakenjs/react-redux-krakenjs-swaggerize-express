import * as ACTIONS from '../constants/actiontypes';
import { combineReducers } from 'redux';

const rootReducer = (state = { pets: [], pet: {}, user: {}, loggedout: false }, action) => {
    switch (action.type) {
        case ACTIONS.FIND_ALL_PETS:
            return {
                ...state,
                pets: action.pets
            };
        case ACTIONS.FIND_PET_BY_ID:
        case ACTIONS.ADD_PET:
        case ACTIONS.ADD_NEW_PET:
            return {
                ...state,
                pet: action.pet
            };
        case ACTIONS.ADD_TO_CART:
        case ACTIONS.REMOVE_FROM_CART:
            let newState = ({
                ...state
            });
            newState.pets = newState.pets.map(pet => {
                if (pet.id === action.id) {
                    pet.cartText = action.cartText;
                    pet.cartAction = action.type
                }
                return pet
            });
            return newState
        case ACTIONS.FIND_PETS_FROM_CART:
            return {
                ...state,
                cart: action.cart
            };
        case ACTIONS.CLEAR_FROM_CART:
            let clearCartState = ({
                ...state
            });
            clearCartState.cart = clearCartState.cart.filter(pet => pet.id !== action.id);
            return clearCartState;
        case ACTIONS.FIND_USER:
            return {
                ...state,
                user: action.user
            };
        case ACTIONS.LOG_OUT:
            let logoutState = {
                ...state,
                name: state.user.name,
                loggedout: action.loggedout
            };
            //Clear the user
            logoutState.user = null;
            return logoutState;
        default:
            return state;
    }
}

export default rootReducer
