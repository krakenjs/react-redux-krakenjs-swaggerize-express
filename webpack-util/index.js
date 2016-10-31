const Webpack = require('webpack');
const Devconfig = require('./webpack.dev');

module.exports = Webpack(Devconfig);
module.exports.devconfig = Webpack(Devconfig);
