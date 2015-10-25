module.exports = {
  options: {
    logConcurrentOutput: true
  },
  servers: [
    'fixtures',
    'webpack-dev-server'
  ],
  stylesheets: [
    'postcss',
    'watch:postcss'
  ],
  all: [
    'concurrent:servers',
    'concurrent:stylesheets'
  ]
};
