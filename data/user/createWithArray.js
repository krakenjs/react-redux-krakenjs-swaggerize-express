'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /user/createWithArray
 */
module.exports = {
    /**
     * summary: Creates list of users with given input array
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: default
     * operationId: createUsersWithArrayInput
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/createWithArray',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
