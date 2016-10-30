'use strict';
var dataProvider = require('../../data/store/inventory.js');
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
     */
    get: function getInventory(req, res, next) {
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
    }
};
