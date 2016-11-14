const Path = require('path');

function web (options) {

    return function (req, res, next) {
        res.sendFile(Path.resolve(__dirname, '../../web/index.html'));
    };
}

module.exports = web;
