'use strict';
var dataProvider = require('../../data/user/createWithList.js');
/**
 * Operations on /user/createWithList
 */
module.exports = {
    /**
     * summary: Creates list of users with given input array
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: default
     */
    post: function createUsersWithListInput(req, res, next) {
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
