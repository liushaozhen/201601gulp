var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('concat',function(){
   gulp.src('app/css/*.css')
       .pipe(concat('app.css'))//先合并
       .pipe(gulp.dest('dist/css'))//再保存合并之后压缩之前的文件
       .pipe(minifyCss())//压缩
       .pipe(rename(function (path) {
          //目录名
          //path.dirname += "/ciao";
          //文件名
          path.basename += ".min";
          //扩展名
          ///path.extname = ".md"
       }))//重命名
       .pipe(gulp.dest('dist/css'))//输出到目的地
});