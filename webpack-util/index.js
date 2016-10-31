const Webpack = require('webpack');
const Devconfig = require('./webpack.dev');
const Commonconfig = require('./webpack.common');

module.exports = Webpack(Devconfig);
module.exports.devconfig = Webpack(Devconfig);
