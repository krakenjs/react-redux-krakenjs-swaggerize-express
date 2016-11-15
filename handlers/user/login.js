'use strict';
var dataProvider = require('../../data/user/{username}.js');
var QueryString = require('querystring');
const InMemoryDB = require('../../lib/inmemorydb');
const UserModel = require('../../lib/models/user');
const Async = require('async');

function githubAuth (req, redirectUrl, cb) {
    if (redirectUrl) {
        //If redirectUrl is found by Local Auth, use that.
        cb(null, redirectUrl);
        return;
    }
    const authorizationUrl = req.app.kraken.get('github:authorizationUrl');
    const client_id = req.app.kraken.get('api:client_id');
    let host = (req.headers && req.headers.host) || `${req.hostname}:8000`;
    let apiBasePath = req.app.swagger && req.app.swagger.api.basePath;
    let redirect_uri = `${req.protocol}://${host}${apiBasePath}/authorize` ;
    let str = QueryString.stringify({
        client_id: client_id,
        redirect_uri: redirect_uri
    });
    redirectUrl = `${authorizationUrl}?${str}`;
    cb(null, redirectUrl);
}

function localAuth (req, cb) {
    var username = req.cookies && req.cookies.username;
    var redirectUrl;
    if (username) {
        //Check the DB for the user.
        var provider = dataProvider['get']['200'];
        req.params.username = username;
        provider(req, null, function (err, data) {
            if (err) {
                cb(err);
                return;
            }
            var user = data.responses;
            if (user.id) {
                var host = (req.headers && req.headers.host) || `${req.hostname}:8000`;
                //TODO Build the profile page
                redirectUrl = `${req.protocol}://${host}`;
            }
            cb(null, req, redirectUrl);
        });
        return;
    }
    cb(null, req, redirectUrl);
}
/**
 * Operations on /user/login
 */
module.exports = {
    /**
     * summary: Logs user into the system
     * description:
     * parameters:
     * produces: application/xml, application/json
     * responses: 303
     */
    get: function loginUser(req, res, next) {
        Async.waterfall([
            function (callback) {
                localAuth(req, callback);
            },
            githubAuth,
        ], function (err, redirectUrl) {
            if (err) {
                next(err);
                return;
            }
            //Redirect
            res.redirect(redirectUrl);
            return;
        });
    }
};
