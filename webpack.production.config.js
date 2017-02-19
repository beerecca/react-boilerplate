const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.rules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

rules.push({
  test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
  use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
});

rules.push({
  test: /[\/\\]src[\/\\].*\.scss/,
  use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
});

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: rules
  },
  plugins: [
    //Deletes all existing build files before the new build
    new WebpackCleanupPlugin(),
    //Allows the app access to process.env.NODE_ENV
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    //Minimises JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    //Pulls all imported css into a separate css file
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
    //Copies the index.html to the built files
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
