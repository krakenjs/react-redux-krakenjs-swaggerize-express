'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /pet
 */
module.exports = {
    /**
     * summary: Add a new pet to the store
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 405
     * operationId: addPet
     */
    post: {
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'post',
                response: '405'
            }, callback);
        }
    },
    /**
     * summary: Update an existing pet
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 400, 404, 405
     * operationId: updatePet
     */
    put: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '404'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet',
                operation: 'put',
                response: '405'
            }, callback);
        }
    }
};
