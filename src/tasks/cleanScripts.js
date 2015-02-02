var gulp = require('gulp'),
    del = require('del'),
    paths = require('../config.js');

gulp.task('cleanScripts', function() {
    del([paths.dist + paths.scripts + '**/*.js', '!' + paths.dist + paths.scripts + 'vendor/*.js'], {force: true});
});