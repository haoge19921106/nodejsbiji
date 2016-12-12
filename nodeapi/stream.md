#stream
#### 流的概念， 数据流， 分为3种数据流
#####readStream
1. creatrReadStream(path[,opts]);

|参数|说明|
|----|----|
|path|创建读取流要制定的文件路径|
|opts|flags <String> encoding <String> <Integer> mode <Integer> <Integer> autoClose <Integer> <Integer> start <Integer> <Integer> end <Integer> <Integer> higtWaterMark <Integer>

1.1 事件

|事件名|说明|
|----|----|
|data|当读取数据的时候|
|close|当数据读取完的时候|

1.2方法

|方法|说明|
|----|----|
|pause()|读取数据暂停|
|resume()|继续读取数据|
|pipe()|管道 由读取流安全的传输到下一个流|
##### writeStream
2. fs.createWriteStream(path[,opts])

|参数|说明|
|----|----|
|path|创建读取流要制定的文件路径|
|opts|flags <String> defaultEncoding <String> <Integer> mode <Integer> <Integer> autoClose <Integer> <Integer> start <Integer> <Integer> end <Integer> <Integer> higtWaterMark <Integer>|

1.1 事件

|事件名|说明|
|----|----|
|drain|当写完数据的时候|


1.2方法

|方法|说明|
|----|----|
|write|写入|
|resume()|继续读取数据|
|pipe()|管道 由读取流安全的传输到下一个流|



