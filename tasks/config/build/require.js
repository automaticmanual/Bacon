var config = {
  taskName: 'requirejs.compile',
  options: {
    name: 'Bacon/main',
    include: '../lib/almond/almond',
    mainConfigFile: 'Bacon/config.js',
    out: 'bin/bacon.min.js',
    wrap: {
      startFile: __dirname + '/start.frag',
      endFile: __dirname + '/end.frag'
    }
  }
};

module.exports = config;
