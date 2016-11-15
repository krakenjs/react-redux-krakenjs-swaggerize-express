import * as SERVICES from '../constants/services';


export const fetchAllPets = () => fetch(SERVICES.FIND_PETS_API)
    .then(resp => resp.json())
    .catch(error => console.log(error));

export const fetchPetById = (id) => fetch(`${SERVICES.FIND_PET_API}${id}`)
    .then(resp => resp.json())
    .catch(error => console.log(error));


export const addPet = ({name, photoUrls}) => fetch(SERVICES.ADD_PET, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            photoUrls
        })
    })
    .then(resp => resp.json())
    .catch(err => console.log(err));

export const findUser = username => fetch(`${SERVICES.FIND_USER}/${username}`)
    .then(resp => resp.json())
    .catch(error => console.log(error));
