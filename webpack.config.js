var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './wc-input.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'wc-input.min.js'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};