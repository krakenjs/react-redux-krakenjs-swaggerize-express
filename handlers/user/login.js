'use strict';
//var dataProvider = require('../../data/user/login.js');
var QueryString = require('querystring');
const InMemoryDB = require('../../lib/inmemorydb');
/**
 * Operations on /user/login
 */
module.exports = {
    /**
     * summary: Logs user into the system
     * description:
     * parameters:
     * produces: application/xml, application/json
     * responses: 200, 400
     */
    get: function loginUser(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var login = req.cookies && req.cookies.login;
        var provider;
        var redirectUrl;

        if (login) {
            //Check the DB for the user.
            var user = InMemoryDB.findUserByLogin(login);
            if (user && user.length > 0) {
                var host = (req.headers && req.headers.host) || `${req.hostname}:8000`;
                var redirect_uri = `${req.protocol}://${host}`;
                //TODO Build the profile page
                res.redirect(redirectUrl);
                return;
            }
        }
        //Redirect to Github Auth
        const authorizationUrl = req.app.kraken.get('github:authorizationUrl');
        const client_id = req.app.kraken.get('api:client_id');
        var host = (req.headers && req.headers.host) || `${req.hostname}:8000`;
        var apiBasePath = req.app.swagger && req.app.swagger.api.basePath;
        var redirect_uri = `${req.protocol}://${host}${apiBasePath}/authorize` ;
        var str = QueryString.stringify({
            client_id: client_id,
            redirect_uri: redirect_uri
        });
        redirectUrl = `${authorizationUrl}?${str}`;
        res.redirect(redirectUrl);
    }
};
