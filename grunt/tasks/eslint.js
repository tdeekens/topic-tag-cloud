module.exports = {
  options: {
    configFile: 'eslint.json'
  },
  target: [
    '<%= paths.src.lint %>'
  ]
};
