'use strict';

var
  webpack = require('webpack'),
  config = {
    target: 'web',
    debug: true,
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: './dist/',
      filename: 'topic-tag-cloud.min.js',
    },
    modulesDirectories: [
      './src'
    ],
    stats: {
      colors: false,
      modules: true,
      reasons: true
    },
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      quiet: true,
      noInfo: true,
      watch: true,
      hot: true,
      inline: true
    },
    progress: true,
    failOnError: true,
    module: {
      loaders: [
        { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional[]=runtime'}
      ]
    }
  },
  plugins = {
    production: [
      new webpack.DefinePlugin({
        'process.env': 'production'
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true
      })
    ],
    development: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': 'development'
      })
    ]
  };

let getConfig = function(isProduction) {
  let
    _config = config;

  if (isProduction) {
    _config.plugins = plugins['production'];
    delete _config.devtool;
  } else {
    _config.plugins = plugins['development'];
  }

  return _config;
}

module.exports = getConfig;
