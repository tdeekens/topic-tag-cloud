var
    _postcssCustomPropertiesProcessor = require('postcss-custom-properties')(),
    _postcssCustomMediaProcessor = require('postcss-custom-media')(),
    _postcssImportProcessor = require('postcss-import')(),
    _postcssNestedProcessor = require('postcss-nested')(),
    _postcssNextProcessor = require('postcss-cssnext')(),
    _autoprefixerProcessor = require('autoprefixer')({
      browsers: [
        '> 2%'
      ]
    }),
    _cssNanoProcessor = require('cssnano')();

module.exports = {
  default: {
    options: {
      map: false,
      processors: [
        _postcssCustomPropertiesProcessor,
        _postcssImportProcessor,
        _postcssNestedProcessor,
        _postcssNextProcessor,
        _postcssCustomMediaProcessor,
        _autoprefixerProcessor,
        _cssNanoProcessor
      ]
    },
    files: {
      '<%= paths.dist.stylesheets %>/topic-tag-cloud.min.css':
        '<%= paths.src.stylesheets %>/index.css'
    }
  }
};
