var gulp = require('gulp'),
    paths = require('../config.js'),
    browserSync = require('browser-sync');

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(paths.styles + '**/*.styl', ['styles', browserSync.reload]);
    gulp.watch(paths.scripts + '**/*.js', ['browserify', browserSync.reload]);
    gulp.watch(paths.html + "*.html", ['bs-reload']);
});
