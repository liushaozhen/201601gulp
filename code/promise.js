/**
 *
 * 有一个延迟任务，当任务完成后要通知客户
 * promise 是一个承诺，客户可以注册回调函数
 * Defer 工厂的一个生产任务
 *
 **/
var Defer = function(){
    //暂存的回调函数 成功之后的回调
    var callback;
    //返回一个defer对象
    return {
        //成功之后调用的方法
        resolve:function(data){
            callback(data);
        },
        promise:{
            //用来注册成功之后的回调
            then:function(_callback){
                callback = _callback;
            }
        }

    }
}
//工厂一个延迟任务
var defer = Defer();
//promise代表给客户的一个承诺
var promise = defer.promise;
//客户注册回调函数，当家俱做好之后给客户送过去
promise.then(function(data){
    console.log(data);
});
defer.resolve('桌子');

/**
 * 1. 顾客下单
 * 2. 顾客提供一个电话和地址进行登记
 * 3. 记录保存下来顾客的电话和地址
 * 4. 当做好之后按顾客的地址送过去
 **/