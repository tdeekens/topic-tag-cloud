'use strict';

var
  webpack = require('webpack'),
  devServerConfig = {
    host: 'localhost',
    contentBase: './',
    headers: { 'Access-Control-Allow-Origin': '*' },
    quiet: false,
    noInfo: false,
    watch: true,
    hot: true,
    inline: true,
    port: 8080
  },
  webpackConfig = {
    target: 'web',
    debug: true,
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: './dist/',
      filename: 'topic-tag-cloud.min.js',
    },
    resolve: {
      alias: {},
      modulesDirectories: [
        'src'
      ],
      extensions: ['', '.js']
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true
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
    _config = {
      webpack: webpackConfig,
      devServer: devServerConfig
    };

  if (isProduction) {
    _config.webpack.plugins = plugins['production'];

    delete _config.webpack.devtool;

    _config.webpack.keepalive = false;
  } else {
    _config.devServer.keepalive = true;

    _config.webpack.plugins = plugins['development'];

    _config.devServer = devServerConfig;
  }

  return _config;
}

module.exports = getConfig;
