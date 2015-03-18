var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    paths = require('../config.js'),
    source = require('vinyl-source-stream');

gulp.task('browserify', ['cleanScripts'], function() {
    return browserify('./' + paths.scripts + 'app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist + paths.scripts));
});
