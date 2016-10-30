'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /store/inventory
 */
module.exports = {
    /**
     * summary: Returns pet inventories by status
     * description: Returns a map of status codes to quantities
     * parameters: 
     * produces: application/json
     * responses: 200
     * operationId: getInventory
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/inventory',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
