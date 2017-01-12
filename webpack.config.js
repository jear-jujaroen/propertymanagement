var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'inline-sourcemap',
  context: path.join(__dirname, 'src'),
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000',
    // 'webpack/hot/only-dev-server',
    './index.js'
    // 'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
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
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        loader: 'react-hot!babel'
        // loaders: [
        //   'react-hot',
        //   'babel-loader'
        // ]
      },
      // {
      //   test: [/\.js$/],
      //   exclude: /node_modules/,
      //   loaders: [
      //     'babel-loader',
      //     'eslint-loader'
      //   ]
      // },
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

// "prestart": "npm run lint",
// "lint": "eslint ./src/**/*.{js, jsx} --fix",
