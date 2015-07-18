/*jslint node: true */
'use strict';

var
    gulp         = require('gulp'),
    jshint       = require('gulp-jshint'),
    nodemon      = require('gulp-nodemon'),
    stylish      = require('jshint-stylish'),
    util         = require('gulp-util');

// run dev server
gulp.task('serve', function() {
  var port     = 3000,
      url      = 'http://127.0.0.1:' + port.toString(),
      livePort = 3002,
      docRoot  = 'dist',
      reload   = 'reload';
  util.log('Serving directory', util.colors.magenta(docRoot), 'on', util.colors.magenta(url));
  nodemon({
    script: 'bin/www',
    args: ['--harmony', port.toString(), livePort.toString(), docRoot, reload],
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  });
});

// lint javascript
gulp.task('lint', function() {
  return gulp.src([
      'gulpfile.js',
      'server.js',
      'app/**/*.js'
    ]).pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// compile and lint
gulp.task('build', ['lint'], function() {});

// default, run dev server with live reload / rebuild
gulp.task('default', ['build', 'serve'], function() {});
