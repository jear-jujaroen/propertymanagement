var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'inline-sourcemap',
  context: path.join(__dirname, '/public/src'),
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8000',
    // 'webpack/hot/only-dev-server',
    './index.js'
    // 'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
    // publicPath: '/public/'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preloaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      { test: /\.(woff2|woff|ttf|svg|eot)$/,
        loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = config
