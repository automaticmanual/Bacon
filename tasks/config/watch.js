var config = {
  taskName: 'watch',
  all: {
    files: ['Bacon/**/*.js', 'tasks/**/*.js', 'test/**/*.js', 'fixtures/**/.js'],
    tasks: ['build-tests', 'jshint'],
    options: {
      spawn: true,
      livereload: true
    }
  }
};
        
module.exports = config;