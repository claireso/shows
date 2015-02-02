var gulp = require('gulp'),
    del = require('del'),
    paths = require('../config.js');

gulp.task('cleanStyles', function() {
    del([paths.dist + paths.styles + '**/*.css'], {force: true});
});