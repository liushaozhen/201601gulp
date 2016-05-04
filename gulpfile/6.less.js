var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
var $ = require('./gulp-load-plugins');

gulp.task('default',function(){
    return gulp.src('app/less/*.less').pipe($.less()).pipe(gulp.dest('dist/css'));
});