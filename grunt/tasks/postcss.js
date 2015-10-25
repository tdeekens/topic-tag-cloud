var
    _postcssCustomPropertiesProcessor = require('postcss-custom-properties')(),
    _postcssCustomMediaProcessor = require('postcss-custom-media')(),
    _postcssImportProcessor = require('postcss-import')(),
    _postcssNestedProcessor = require('postcss-nested')(),
    _postcssNextProcessor = require('postcss-cssnext')(),
    _postcssSvgProcessor = require('postcss-svg')({
      ei: { "defaults": "[fill]: #333" }
    }),
    _autoprefixerProcessor = require('autoprefixer')({
      browsers: [
        'last 3 Android versions',
        'last 4 iOS versions',
        'last 5 Chrome versions',
        'last 8 ChromeAndroid versions',
        'last 4 ExplorerMobile versions',
        'last 5 FirefoxAndroid versions'
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
        _postcssSvgProcessor,
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
