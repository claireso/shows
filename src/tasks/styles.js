var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    paths = require('../config.js');

gulp.task('styles', ['cleanStyles'], function() {
    return gulp.src(paths.styles + '**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest(paths.dist + paths.styles));
});
