const Express = require('express');
const Kraken = require('kraken-js');
const InMemoryDB = require('./inmemorydb');

let options = {
    onconfig: (config, next) => {
        /**
         * Initialize the InMenory DB.
         * This is a simplified db only for tutorial/examples
         * For real world use case use MongoDB or Redis to store/retrieve data.
         */
        InMemoryDB.init();
        next(null, config);
    }
};

let App = module.exports = Express();

App.use(Kraken(options));
