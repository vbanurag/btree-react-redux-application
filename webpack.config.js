/**
 * Created by anurag on 24/4/17.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            multiStep: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'anuragsharma.com',
        port: 9000,
        stats: 'errors-only'
    }
    // devServer: {
    //     host: 'anuragsharma.com', // Defaults to `localhost`
    //     port: 3000, // Defaults to 8080
    //     proxy: {
    //         '^/api/*': {
    //             target: 'http://anuragsharma.com:8080/',
    //             secure: false,

    //         }
    //     }
    // }
}