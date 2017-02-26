const path = require('path')
const webpack = require('webpack')

const config = {
  debug: true,
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    // 'webpack-hot-middleware/client',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client?reload=true',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './src'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
