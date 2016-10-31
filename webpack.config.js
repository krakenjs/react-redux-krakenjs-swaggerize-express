const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack-util/webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = WebpackMerge(CommonConfig, {
    entry: {
        vendor: './client/vendor.js',
        polyfills: './client/polyfills.js',
        app: './client/app/main.js'
    },
    output: {
        filename: './bundle/[name].js'
    },
    plugins: [
        new ExtractTextPlugin('./bundle/[name].css'),
        new Webpack.NoErrorsPlugin(),
        new Webpack.optimize.DedupePlugin(),
        new Webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
