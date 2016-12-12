var fs=require("fs");
function copy(filename) {
    var index=filename.indexOf(".");
    var bacename=filename.slice(0,index)+"(1)";
    var lastname=filename.slice(index);
    var newname=bacename+lastname;
    fs.readFile(filename,function (error,data) {
        fs.writeFile(newname,data,function () {
            console.log("end")
        })
    })
}
module.exports.copy=copy;