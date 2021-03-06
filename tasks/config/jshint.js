var config = {
  taskName: 'jshint',
  all: ['Bacon/**/*.js', 'Gruntfile.js', 'test/**/*.js', 'tasks'],
  options: {
    expr: true,
    indent: 2,
    curly: true,
    eqeqeq: true,
    newcap: true,
    quotmark: 'single',
    unused: true,
    trailing: true,
    sub: true
  }
};

module.exports = config;