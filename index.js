const Express = require('express');
const Kraken = require('kraken-js');
const InMemoryDB = require('./lib/inmemorydb');
const PetMock = require('./lib/mocks/petMock');
const Path = require('path');

let options = {
    onconfig: (config, next) => {
        /**
         * Initialize the InMenory DB.
         * This is a simplified db only for tutorial/examples
         * For real world use case use MongoDB or Redis to store/retrieve data.
         */
        InMemoryDB.init();
        //Initialize the DB with dummy data.
        PetMock().forEach(pet => {
            InMemoryDB.insertPet(pet);
        });
        next(null, config);
    }
};

let App = module.exports = Express();
//TODO: Move this as a meddleware
//Root route to send the Index.html
App.get('/', function (req, res) {
    res.sendFile(Path.resolve(__dirname, 'web/index.html'));
    return;
});
//Init Kraken
App.use(Kraken(options));
