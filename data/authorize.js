'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /authorize
 */
module.exports = {
    /**
     * summary: Authorize a user
     * description: 
     * parameters: code
     * produces: application/xml, application/json
     * responses: 200, 400
     * operationId: authorizeUser
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/authorize',
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
                path: '/authorize',
                operation: 'get',
                response: '400'
            }, callback);
        }
    }
};
