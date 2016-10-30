'use strict';
var dataProvider = require('../../data/pet/{petId}.js');
/**
 * Operations on /pet/{petId}
 */
module.exports = {
    /**
     * summary: Find pet by ID
     * description: Returns a single pet
     * parameters: petId
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     */
    get: function getPetById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Updates a pet in the store with form data
     * description: 
     * parameters: petId, name, status
     * produces: application/xml, application/json
     * responses: 405
     */
    post: function updatePetWithForm(req, res, next) {
        /**
         * Get the data for response 405
         * For response `default` status 200 is used.
         */
        var status = 405;
        var provider = dataProvider['post']['405'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Deletes a pet
     * description: 
     * parameters: api_key, petId
     * produces: application/xml, application/json
     * responses: 400, 404
     */
    delete: function deletePet(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        var status = 400;
        var provider = dataProvider['delete']['400'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
