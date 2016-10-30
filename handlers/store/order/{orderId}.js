'use strict';
var dataProvider = require('../../../data/store/order/{orderId}.js');
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
     */
    get: function getOrderById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Delete purchase order by ID
     * description: For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     * parameters: orderId
     * produces: application/xml, application/json
     * responses: 400, 404
     */
    delete: function deleteOrder(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        var status = 400;
        var provider = dataProvider['delete']['400'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
