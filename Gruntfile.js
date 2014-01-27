var ConfigLoader = require('grunt-config-loader');

var gruntFile = function(grunt) {
  var configLoader = new ConfigLoader(grunt, {
    cwd: 'tasks/config'
  });

  configLoader.loadAll();

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  // grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask('build-tests', require('./tasks/helpers/super-glob.js')(grunt, 'test-builder'));
  grunt.registerTask('test', ['build-tests', 'connect:test', 'mocha_phantomjs']);
  // grunt.registerTask('build',['jshint', 'test', 'requirejs']);
  grunt.registerTask('dev', ['connect:dev']);
  grunt.registerTask('default', ['watch']);
};

module.exports = gruntFile;