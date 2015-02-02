var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css')
    paths = require('../config.js');
    
gulp.task('buildcss', ['styles'], function() {
    return gulp.src(paths.dist + paths.styles + '**/*.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest(paths.dist + paths.styles))
});