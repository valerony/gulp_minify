var gulp = require('gulp');
var gcmq = require('gulp-group-css-media-queries');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename'); 

gulp.task('default', async function () {
    gulp.src('src/**/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('dist'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});