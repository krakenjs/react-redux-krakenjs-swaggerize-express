'use strict';
var Mockgen = require('../mockgen.js');
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
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/findByStatus',
                operation: 'get',
                response: '200'
            }, callback);
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
