var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    paths = require('../config.js');

gulp.task('buildjs', ['browserify'], function() {
    return gulp.src([paths.dist + paths.scripts + '**/*.js', '!' + paths.dist + paths.scripts + 'vendor/'])
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + paths.scripts));
});
