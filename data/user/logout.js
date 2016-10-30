'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /user/logout
 */
module.exports = {
    /**
     * summary: Logs out current logged in user session
     * description: 
     * parameters: 
     * produces: application/xml, application/json
     * responses: default
     * operationId: logoutUser
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/logout',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
