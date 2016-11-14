'use strict';

function notfound (options) {

    options = options || {};
    options.errorName = options.errorName || 'NOT_FOUND';
    options.errorMessage = options.errorMessage || 'The requested resource was not found';

    return function (req, res, next) {

        var error = {
            name : options.errorName,
            message : options.errorMessage
        };
        //TODO send the 404 HTML
        res.status(404).send(error);
    };
}

module.exports = notfound;
