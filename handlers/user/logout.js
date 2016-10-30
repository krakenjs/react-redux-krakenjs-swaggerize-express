'use strict';
var dataProvider = require('../../data/user/logout.js');
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
     */
    get: function logoutUser(req, res, next) {
        /**
         * Get the data for response default
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['default'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
