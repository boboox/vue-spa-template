'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    watch: true,
    watchOptions: {
        ignored: [/node_modules/],
        aggregateTimeout: 200
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    data: '@import "src/styles/variables.scss";',
                    includePaths: 'src/styles'
                },
                context: path.resolve(__dirname) // your project root
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }), //  提取第三方库
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.ejs',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})
