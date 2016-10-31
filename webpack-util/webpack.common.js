const Path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css?sourceMap'])
            }
        ]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new Webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {
                    root: Path.resolve(__dirname, 'client/app')
                }
            }
        })
    ]
};
