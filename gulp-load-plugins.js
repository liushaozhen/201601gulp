var $ = {};
//读取一个JSON模块
var package = require('./package.json');
//获取此项目的开发时依赖列表
var devDependencies = package.devDependencies;
//循环每个插件
for(var attr in devDependencies){
    //如果是gulp插件的话,就加载它并且赋给$
    //gulp-concat
    if(attr.startsWith('gulp-')){
        $[attr.slice(5)] = require(attr);
    }
}
console.log($);
//导出一个对象$
module.exports = $;
