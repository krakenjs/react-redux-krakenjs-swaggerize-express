/**
 * This inmemory db is only for tutorial/example purpose.
 * For real use case and production ready environment use products like redis, mongodb etc.
 * This assumes
 */
const Loki = require('lokijs');
let DB;
let Users;
//let Pets;
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
    Users = db.addCollection('users', { indices: ['id','username'] });
    //Pets = db.addCollection('pets', { indices: ['id','name'] });
    //Orders = db.addCollection('orders', { indices: ['id','petid'] });
}

function insertUser(user) {
    let result;
    if(!Users) {
        return;
    }
    if (user && user.username) {
        let currUser = findUserByUsername(user.username);
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

function findUserByUsername(username) {
    if(!Users) {
        return;
    }
    return Users.find({'username': username});
}

module.exports = {
    init: init,
    insertUser: insertUser,
    findUserByUsername: findUserByUsername,
    findAllUsers:findAllUsers
};
