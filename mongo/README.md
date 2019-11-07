

### 启动命令

存储的位置  mongod --dbpath=./data

启动   mongo

### 基本使用

use school  切换到school下

db.students.insert({name:'dm',age:18}) 插入数据
db.students.save({name:'dm',age:18}) 插入数据并更新
db.students.find() 查看数据

db.dropDatabase()  删除数据
db.createCollection('hello') 创建 hello表
db.shutdownServer()  关闭数据库