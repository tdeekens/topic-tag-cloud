var
  config = require('../../webpack.config.js')(false),
  taskConfig = config.devServer;

// Webpack, you and your config...
// inside out - outside in
taskConfig.webpack = config.webpack;

module.exports = {
  serve: taskConfig
};
