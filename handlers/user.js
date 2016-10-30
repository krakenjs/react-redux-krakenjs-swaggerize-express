'use strict';
var dataProvider = require('../data/user.js');
/**
 * Operations on /user
 */
module.exports = {
    /**
     * summary: Create user
     * description: This can only be done by the logged in user.
     * parameters: body
     * produces: application/xml, application/json
     * responses: default
     */
    post: function createUser(req, res, next) {
        /**
         * Get the data for response default
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['default'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
