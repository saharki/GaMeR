const config = require('./webpack.config.js')
const webpack = require('webpack')
const UglifyJsPlugin =  require('uglifyjs-webpack-plugin')

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
)

config.plugins.push(
    new UglifyJsPlugin({
        // uglifyOptions: {
        //     ie8: false,
        //     ecma: 8,
        //     mangle: {
        //         properties: {
        //             // mangle property options
        //         }
        //     },
        //     output: {
        //         comments: false,
        //         beautify: false,
        //     },
        //     compress:true,
        //     warnings: false
        // }
    })
)

module.exports = config