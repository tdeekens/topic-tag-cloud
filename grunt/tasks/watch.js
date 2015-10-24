module.exports = {
  fixtures: {
    files: ['<%= paths.mocks.src %>'],
    tasks: ['hapi:fixtures'],
    options: {
      spawn: false
    }
  }
};
