var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "../"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
