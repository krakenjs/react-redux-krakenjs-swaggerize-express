const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = WebpackMerge(CommonConfig, {
    entry: {
        vendor: [
            './client/vendor.js',
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ],
        polyfills: [
            './client/polyfills.js',
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ],
        app: [
            './client/app/main.js',
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ]
    },
    output: {
        filename: '[name].js',
        path: '/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new Webpack.optimize.OccurrenceOrderPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ]
});
