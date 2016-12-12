# 文件系统
> 读取

        fs.open(path,flages[,mode],calssback)
        /*
        path 打开文件的路径
        flags 打开的方式 r   w  a
        mode  打开的模式
        callback  完成后执行的函数
        */

>读取

        fs.read(fd,buffer,offset,length,position,callback);
        /*
        fd 打开文件的编码
        buffer 要保存读取内容的容器
        offset 在容器中存储的起始位置
        length 在容器中存储的长度
        position  将要读取文件的位置
        callback 读取完成后执行的回调函数
        */
> 读取文件的详细信息

       fs.stat(path,callback)
       /*
       path 打开文件的路径
       callback  完成后执行的函数
       callback 参数（error，info）
      */
> 写入文件

      fs.write(fd,buffer,offset,length[,position],callback)
      /*
      fd 打开文件编码
      buffer  要写入的数据   不能写字符串，不然后面的参数不起作用
      offset  写到文件的那个位置
      length 要写入的长度
      position  写入内容的第几位开始写
      callback  完成后执行的函数
      */

> 创建一个文件文件

        fs.writeFile(file, data[, options], callback)
        /*
        file 文件的名字
        data 写入的内容
        position  指定选项
        callback  完成后执行的函数
               */
> 追加内容

       fs.appendFile(file, data[, options], callback)
           /*
               file 文件的名字
               data 写入的内容
               position  指定选项
               callback  完成后执行的函数


         如果文件存在就是追加内容，如果文件不存在就和writeFile一样
                      */

> 修改文件的名字

        fs.rename(oldPath, newPath, callback)
                  原来的名字   新名字

> 删除文件

      fs.unlink(path, callback)
                文件

> 读取文件

       fs.readFile(file[, options], callback)
       /*
       file    要读取的文件
       position  指定选项

       */




