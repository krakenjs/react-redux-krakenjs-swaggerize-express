'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /store/order
 */
module.exports = {
    /**
     * summary: Place an order for a pet
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 200, 400
     * operationId: placeOrder
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/order',
                operation: 'post',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/order',
                operation: 'post',
                response: '400'
            }, callback);
        }
    }
};
