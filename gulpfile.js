var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
//var $ = require('./gulp-load-plugins');
var connect = require('gulp-connect');
gulp.task('copy-html',function(){
    //获取源文件
    gulp.src('app/index.html')
        //输出到目标文件
        .pipe(gulp.dest('dist'))
        //通知浏览器自动重启
        .pipe(connect.reload())
    ;
});
//定义一个任务server
gulp.task('server',function(){
    //启动一个服务
    connect.server({
        root:'dist',//服务器的根目录
        port:8080, //服务器的地址，没有此配置项默认也是 8080,
        //启动实时刷新功能,当文件修改的时候自动刷新浏览器
        livereload:true
    });
});
gulp.task('watch',function(){
    //监听app下index.html的变化，当变化之后自动重新拷贝
    gulp.watch('app/index.html',['copy-html']);
});
gulp.task('default',['server','watch']);