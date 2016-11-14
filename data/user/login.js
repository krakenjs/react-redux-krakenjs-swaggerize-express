'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /user/login
 */
module.exports = {
    /**
     * summary: Logs user into the system
     * description: 
     * parameters: 
     * produces: application/xml, application/json
     * responses: 200, 400
     * operationId: loginUser
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/login',
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
                path: '/user/login',
                operation: 'get',
                response: '400'
            }, callback);
        }
    }
};
