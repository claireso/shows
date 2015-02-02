var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    paths = require('../config.js'),
    source = require('vinyl-source-stream');

gulp.task('browserify', ['cleanScripts'], function() {
    return browserify('./' + paths.scripts + 'app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist + paths.scripts));
});
