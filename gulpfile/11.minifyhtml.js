var gulp = require('gulp');


var minify = require('gulp-minify-html');

gulp.task('default',function(){
   gulp.src('app/index.html')
       .pipe(minify())
       .pipe(gulp.dest('dist'));
});