import * as ACTIONS from '../constants/actiontypes';

const pets = (state = { pets: [], pet: {} }, action) => {
    switch (action.type) {
        case ACTIONS.FIND_ALL_PETS:
            return Object.assign({}, state, {
                pets: action.pets
            })
        case ACTIONS.FIND_PET_BY_ID:
        case ACTIONS.ADD_PET:
        case ACTIONS.ADD_NEW_PET:
            return Object.assign({}, state, {
                pet: action.pet
            })
        default:
            return state;
    }
}

export default pets
