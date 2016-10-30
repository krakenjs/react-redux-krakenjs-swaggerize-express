'use strict';
var dataProvider = require('../../data/store/order.js');
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
     */
    post: function placeOrder(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
