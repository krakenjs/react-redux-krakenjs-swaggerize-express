'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /store/order/{orderId}
 */
module.exports = {
    /**
     * summary: Find purchase order by ID
     * description: For valid response try integer IDs with value &gt;= 1 and &lt;= 10. Other values will generated exceptions
     * parameters: orderId
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     * operationId: getOrderById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/order/{orderId}',
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
                path: '/store/order/{orderId}',
                operation: 'get',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/order/{orderId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Delete purchase order by ID
     * description: For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     * parameters: orderId
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: deleteOrder
     */
    delete: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/order/{orderId}',
                operation: 'delete',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/store/order/{orderId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
