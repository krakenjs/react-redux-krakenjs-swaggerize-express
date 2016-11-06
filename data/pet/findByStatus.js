'use strict';
const Mockgen = require('../mockgen.js');
const InMemoryDB = require('../../lib/inmemorydb');
const PetModel = require('../../lib/models/pet');
/**
 * Operations on /pet/findByStatus
 */
module.exports = {
    /**
     * summary: Finds Pets by status
     * description: Multiple status values can be provided with comma separated strings
     * parameters: status
     * produces: application/xml, application/json
     * responses: 200, 400
     * operationId: findPetsByStatus
     */
    get: {
        200: function (req, res, callback) {
            let status = req.query.status;
            let pets = InMemoryDB.findPetsByStatus(status);

            if (pets && pets.length > 0) {
                pets = pets.map(pet => new PetModel(pet));
            } else {
                pets = [];
            }

            callback(null, {
                responses: pets
            });
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/findByStatus',
                operation: 'get',
                response: '400'
            }, callback);
        }
    }
};
