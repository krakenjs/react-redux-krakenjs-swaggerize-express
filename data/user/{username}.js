'use strict';
var Mockgen = require('../mockgen.js');
const InMemoryDB = require('../../lib/inmemorydb');
const UserModel = require('../../lib/models/user');
/**
 * Operations on /user/{username}
 */
module.exports = {
    /**
     * summary: Get user by user name
     * description:
     * parameters: username
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     * operationId: getUserByName
     */
    get: {
        200: function (req, res, callback) {
            var user = {};
            var username = req.params.username;
            if (username) {
                //Check the DB for the user.
                user = InMemoryDB.findUserByUsername(username);
                if (user && user.length > 0) {
                    user = new UserModel(user[0]);
                }
            }

            callback(null, {
                responses: user
            });
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{username}',
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
                path: '/user/{username}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Updated user
     * description: This can only be done by the logged in user.
     * parameters: username, body
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: updateUser
     */
    put: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{username}',
                operation: 'put',
                response: '400'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{username}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Delete user
     * description: This can only be done by the logged in user.
     * parameters: username
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: deleteUser
     */
    delete: {
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{username}',
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
                path: '/user/{username}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
