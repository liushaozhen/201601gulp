var gulp = require('gulp');
// callback是当异步任务完成之后可以调用的回调函数
//用来表示异步任务执行完毕
gulp.task('one',function(callback){
   setTimeout(function(){
      console.log('one');
      callback();
   },5000);
})

gulp.task('two',function(){
   console.log('two');
})

gulp.task('default',['one','two'],function(){
   console.log('default');
});