var gulp = require('gulp');
/**
 * 复制图片
 *//*
gulp.task('copy-images',function(){
   return gulp.src('app/imgs/!*.jpg').pipe(gulp.dest('dist'));
});*/

/**
 * 1. {} 里可以指定多个扩展名
 * 2. * 匹配所有的字符，除了路径分隔符 /
 * 3. ** 匹配所有的字符，包括路径分隔符 /
 */
/*gulp.task('copy-images',function(){
   return gulp.src('app/imgs/!**!/!*.{jpg,png}').pipe(gulp.dest('dist'));
});*/

/**
 * 匹配多个目录 glob
 * 可以填写一个数组
 * {base:'app'} 基本路径
 * app /css/style.css
 * app /js/index.js
 */
gulp.task('copy-other',function(){
   return gulp.src(['app/css/*.css','app/js/*.js','!app/js/*.tmp.js'],{base:'app'}).pipe(gulp.dest('dist'));
});
