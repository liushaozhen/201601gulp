var gulp = require('gulp');
/**
 * 定义一个任务，名字叫hello
 * 第一个参数是任务的名称  第二个参数是任务的函数定义
 * 执行任务其实就是执行第二个函数
 *
**/
gulp.task('default',function(){
    //src 读取到文件
    // pipe把读到的文件通过管道的方式传递
    //dest指定输出的目录 参数一定是一个目录的名字
//src\js\main\main.js
   // ** 可以匹配路径分隔符
   gulp.src('src/js/**/*.js').pipe(gulp.dest('dist'));
});

