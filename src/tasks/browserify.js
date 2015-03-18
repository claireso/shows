var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    paths = require('../config.js'),
    notify = require('gulp-notify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', ['cleanScripts'], function() {
    return browserify('./' + paths.scripts + 'app.js')
        .transform(babelify)
        .bundle()
        .on('error', notify.onError(function (error) {
            return "Js: " + error.message;
        }))
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist + paths.scripts));
});
