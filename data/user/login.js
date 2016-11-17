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
     * responses: 303
     * operationId: loginUser
     */
    get: {
        303: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/login',
                operation: 'get',
                response: '303'
            }, callback);
        }
    }
};
