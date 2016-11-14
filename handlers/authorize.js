'use strict';
var dataProvider = require('../data/authorize.js');
const Wreck = require('wreck');
const InMemoryDB = require('../lib/inmemorydb');
/**
 * Operations on /authorize
 */
module.exports = {
    /**
     * summary: Authorize a user
     * description:
     * parameters: code
     * produces: application/xml, application/json
     * responses: 200, 400
     */
    get: function authorizeUser(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var code = req.query.code;
        if (code) {
            var host = (req.headers && req.headers.host) || `${req.hostname}:8000`;
            var redirect_uri = `${req.protocol}://${host}` ;
            const tokenUrl = req.app.kraken.get('github:tokenUrl');
            const profileUrl = req.app.kraken.get('github:profileUrl');
            const client_id = req.app.kraken.get('api:client_id');
            const client_secret = req.app.kraken.get('api:client_secret');

            Wreck.post(tokenUrl, {
                headers: {
                    Accept: 'application/json'
                },
                payload: {
                    client_id,
                    client_secret,
                    code
                }
            }, (err, githubResp, payload) => {
                if (err) {
                    next(err);
                    return;
                }
                var data = JSON.parse(payload.toString());
                var token = data.access_token;
                if (token) {
                    Wreck.get(profileUrl, {
                        headers: {
                            'User-Agent': 'petdemo-app',
                            Accept: 'application/json',
                            Authorization: `token ${token}`
                        }
                    },
                    (err, profileResp, payload) => {
                        if (err) {
                            next(err);
                            return;
                        }
                        var profile = JSON.parse(payload.toString());
                        InMemoryDB.insertUser(profile);
                        res.cookie('login', profile.login);
                        //TODO Build the profile page
                        res.redirect(redirect_uri);
                    });
                }

            });
            return;
        }

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
