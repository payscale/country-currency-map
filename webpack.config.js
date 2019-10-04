var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'country-currency-map': './index.js',
        'country-currency-map.min': './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '/tests/']
            }
        ]
    }
};
