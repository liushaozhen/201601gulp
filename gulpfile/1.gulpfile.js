var gulp = require('gulp');
/**
 * 定义一个任务，名字叫hello
 * 第一个参数是任务的名称  第二个参数是任务的函数定义
 * 执行任务其实就是执行第二个函数
 *
**/
gulp.task('default',function(){
    console.log('hello');
});
