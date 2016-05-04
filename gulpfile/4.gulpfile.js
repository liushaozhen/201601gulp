var gulp = require('gulp');
gulp.task('copyhtml',function(){
   gulp.src('src/html/*.html').pipe(gulp.dest('dist'))
});

/*gulp.task('default',function(){
   gulp.watch('src/html/!*',['copyhtml']);
})*/
gulp.task('default',function(){
   gulp.watch('src/html/*',function(event){
      console.log(event.type);
      console.log(event.path);
   });
})
