module.exports = {
  fixtures: {
    files: ['<%= paths.mocks.src %>'],
    tasks: ['hapi:fixtures'],
    options: {
      spawn: false
    }
  },
  postcss: {
    files: ['<%= paths.src.stylesheets %>/**/*.css'],
    tasks: ['postcss'],
    options: {
      spawn: false
    }
  }
};
