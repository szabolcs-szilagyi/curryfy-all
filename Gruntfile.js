var CHECK_PATHS = ['Gruntfile.js', '*.js', 'src/**/*.js'];

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: ['test-common.js']
        },
        src: ['src/**/*.test.js']
      }
    },
    jshint: {
      all: CHECK_PATHS
    },
    jscs: {
      src: CHECK_PATHS
    }
  });

  grunt.registerTask('default', ['jshint', 'jscs', 'mochaTest']);
  grunt.registerTask('test', 'default');
};
