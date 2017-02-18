module.exports = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'react-hot-loader'
  },
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    options: {
      presets: ['es2015', 'react'],
      plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread'],
    }
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader'
  },
  {
    test: /\.ico/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader?name=[name].[ext]'
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/gif'
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg'
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/png'
  }
];
