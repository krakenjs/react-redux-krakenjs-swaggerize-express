
function errorbin (options) {

    options = options || {};
    options.errorName = options.errorName || 'SERVER_ERROR';

    return function (err, req, res, next) {

        if (!err) {
            next();
            return;
        }

        var error = {
            name : err.name || options.errorName,
            message : err.message || ''
        };
        //TODO send the 500 HTML
        res.status(err.status || 500).send(error);
    };
}

module.exports = errorbin;
