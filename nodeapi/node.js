// console.time("当前时间：","")
// for(var i=0;i<10000;i++){
//
//
// }
// console.timeEnd("当前时间：","")
// var obj=require("./node1.js")
//  console.log(obj.a)
// // console.log(global.a)
// var a="aa.js";
// console.log(a)
// var c=10;
// if(c<20){
//     console.error("错误提示：",c+"不能小于20")
// }

// process.stdin.on("data",function (data) {
//    process.stdout.write(data)
//     process.stdin.emit("end")
// })
// process.stdin.on("end",function () {
//     process.stdout.write("end")
//    // process.stdin.pause();
// })
// console.log(process.cwd());


// var buffer=new Buffer(3);
// buffer.write("ada2222")
// console.log(buffer)


// 读取+修改
// var fs=require("fs");
// fs.open("./node1.js","r+",function (error,id) {
//     var buffer=new Buffer(10);
//     console.log(id)
//     fs.read(id,buffer,0,10,0,function (error,len,data) {
//         console.log(data)
//         fs.write(id,"glo",0,1,0,function () {
//             console.log("end")
//         })
//     })
// })
// var fss=require("fs");
// fss.open("./node1.js","r+",function (error,id) {
//     fss.stat("./node1.js",function (error,info) {
//         var buffer=new Buffer(info.size);
//         fss.read(id,buffer,0,info.size,0,function (error,len,data) {
//             fss.write(id,"abc",info.size,3,1,function () {
//                 console.log("end")
//             })
//         })
//
//     })
// })

// 创建文件判断是否存在
var fs=require("fs");
fs.stat("demo",function (error,info) {
    if(!info){
        fs.mkdir("demo")
    }

})


