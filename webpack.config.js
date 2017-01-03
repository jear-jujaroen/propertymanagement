var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000',
    // 'webpack/hot/only-dev-server',
    './index.js',
    // 'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/
        // loader: 'jshint-loader'
    //   }
    // ],
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
        // query: {
        //   presets: ['react', 'es2015']
        // }
      },
      {
        test:/\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}

module.exports = config;
