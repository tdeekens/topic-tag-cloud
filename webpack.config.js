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
    port: 8080
  },
  webpackConfig = {
    target: 'web',
    debug: true,
    devtool: 'inline-source-map',
    entry: [
      './src/javascript/index.js'
    ],
    output: {
      path: './dist/',
      filename: 'topic-tag-cloud.min.js',
    },
    resolve: {
      alias: {},
      modulesDirectories: [
        'src/javascript',
        'node_modules'
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
      loaders: [{
        test: /\.json/,
        loader: 'json-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 0
        }
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      }]
    }
  },
  plugins = {
    production: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true
      }),
      new webpack.ProvidePlugin({
        fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      })
    ],
    development: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
        fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
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
