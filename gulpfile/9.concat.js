var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('concat',function(){
    gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
});