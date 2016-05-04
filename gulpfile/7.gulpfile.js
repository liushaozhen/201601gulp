var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
//var $ = require('./gulp-load-plugins');
var connect = require('gulp-connect');
//定义一个任务server
gulp.task('server',function(){
    //启动一个服务
    connect.server({
        root:'app',//服务器的根目录
        port:8080 //服务器的地址，没有此配置项默认也是 8080
    });
});