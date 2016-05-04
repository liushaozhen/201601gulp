var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('concat',function(){
    gulp.src('app/js/*.js')
        .pipe(concat('all.js'))//先合并
        .pipe(gulp.dest('dist/js'))//再保存合并之后压缩之前的文件
        .pipe(uglify())//压缩
        .pipe(rename('all.min.js'))//重命名
        .pipe(gulp.dest('dist/js'))//输出到目的地
});