/**
 * This inmemory db is only for tutorial/example purpose.
 * For real use case and production ready environment use products like redis, mongodb etc.
 * This assumes
 */
const Loki = require('lokijs');
let DB;
let Users;
let Pets;
//let Orders;
let initialized = false;

function createDb() {
    if (!DB) {
        DB = new Loki('Petstore');
    }
    return DB;
}

function init() {
    if (initialized) {
        return;
    }
    initialized = true;
    let db = createDb();
    Users = db.addCollection('users', { indices: ['id','login'] });
    Pets = db.addCollection('pets', { indices: ['name', 'id'] });
    //Orders = db.addCollection('orders', { indices: ['id','petid'] });
}

/**
 *
 * USERS
 *
 */
function insertUser(user) {
    let result;
    if(!Users) {
        return;
    }
    if (user && user.login) {
        let currUser = findUserByLogin(user.login);
        if (currUser && currUser.length > 0) {
            currUser = Object.assign(currUser[0], user);
            result = Users.update(currUser);
        } else {
            result = Users.insert(user);
        }
        return result;
    }
}

function findAllUsers() {
    if(!Users) {
        return;
    }
    return Users.find();
}

function findUserByLogin(login) {
    if(!Users) {
        return;
    }
    return Users.find({'login': login});
}

/**
 *
 * PETS
 *
 */
function insertPet(pet) {
    let result;
    if(!Pets) {
        return;
    }
    if (pet && pet.id) {
        let currPet = findPetById(pet.id);
        if (currPet && currPet.length > 0) {
            currPet = Object.assign(currPet[0], pet);
            result = Pets.update(currPet);
        } else {
            result = Pets.insert(pet);
        }
        return result;
    }
}
function findAllPets() {
    if(!Pets) {
        return;
    }
    return Pets.find();
}

function findPetsByStatus(status) {
    if(!Pets) {
        return;
    }
    return Pets.find({'status': { '$containsAny' : status }});
}

function findPetById(id) {
    if(!Pets) {
        return;
    }
    return Pets.find({'id': id});
}

module.exports = {
    init: init,
    //Users
    insertUser: insertUser,
    findUserByLogin: findUserByLogin,
    findAllUsers:findAllUsers,
    //Pets
    insertPet: insertPet,
    findPetById: findPetById,
    findPetsByStatus: findPetsByStatus,
    findAllPets:findAllPets
};
