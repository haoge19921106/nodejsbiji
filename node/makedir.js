var fs=require("fs")
function makedir(path) {
    var arr=path.split("/")
    var path="";
    arr.forEach(function (name,val) {
        path+=name+"/" ;
        if(name.indexOf(".")>-1){
            fs.writeFileSync(path.slice(0,-1),"<html>\n\f</html>")
        }else{
            fs.mkdirSync(path)
        }

    })
}
module.exports.makedie=makedir;