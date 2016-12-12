#node 安装
####1. 进入   官方网站
####2. 在相应的平台
###Windows安装
1. 下载相应的安装文件，用两种安装包，一个是node.msi,一个是node.exe。exe就是一个二进制执行文件，只是用来解释nodejs程序的，要想在命令行运行node 命令，必须手动将nde.exe放入全局下面
msi 包含了node.exe,npm,一些nodejs运行时必备的一些环境命令，安装的时候一定选择add to path,将node.exe自动添加到全局路径
安装成功后，可以执行`node -v`检测安装的node的版本，以及是否安装成功
2. mac 安装
3. linux安装
#npm
1. npm包管理工具 node package manage,安装成功后 npm -v检测安装的npm的版本，以及是否安装成功
2. 为了nodejs的程序人员开发方便，给我们提供的一个管理包，nodejs.npm 适合nodejs人员模块化开发。不需要关心放在什么地方，只需要通过npm就能对包使用
