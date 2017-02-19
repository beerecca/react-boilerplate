'use strict';
const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

//Allows inclusion of css files from node_modules folder, eg normalize.css
//Not including ExtractTextPlugin in dev config to allow for hot module reloading of styles
rules.push({
  test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
  use: ['style-loader?sourceMap', 'css-loader']
});

rules.push({
  test: /[\/\\]src[\/\\].*\.scss/,
  use: ['style-loader?sourceMap', 'css-loader', 'sass-loader']
});

rules.push({
  test: /\.js$/,
  enforce: 'pre',
  exclude: ['node_modules', 'bower_components'],
  loader: 'eslint-loader'
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + HOST + ':' + PORT,
    'webpack/hot/only-dev-server',
    './src/app.js' //App entry point
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: rules
  },
  devServer: {
    contentBase: './dist',
    //Do not print bundle build stats to console
    noInfo: true,
    clientLogLevel: 'none',
    //Gzip assets
    compress: true,
    //Enable hot module reloading
    hot: true,
    //Embed the webpack-dev-server runtime into the bundle
    inline: true,
    //Serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //Copies the index.html to the built files
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
