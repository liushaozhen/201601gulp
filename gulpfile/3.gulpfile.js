var gulp = require('gulp');
var Q = require('Q');
// callback是当异步任务完成之后可以调用的回调函数
//用来表示异步任务执行完毕
gulp.task('one',function(callback){
   var deferred = Q.defer();
   // 做一些异步操作
   setTimeout(function() {
      deferred.resolve();
   }, 5000);
   return deferred.promise;
})

gulp.task('two',function(){
   console.log('two');
})

gulp.task('default',['one','two'],function(){
   console.log('default');
});