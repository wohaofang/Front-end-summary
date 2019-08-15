## 初始化git

- git init 初始化
- git status  查看状态
- git add .  添加到暂存区
- git commit -m '消息' 提交 
- git log 提交日志
- git checkout . 从暂存区中撤销修改
- git reset HEAD 回滚上次提交 


### 回滚历史版本
```
    git reset --herd '版本号' // 回滚指定版本
    git reflog 查看全部版本日志
```

### 分支操作
```
git branch 查看所有分支
git branch dev 创建 dev 分支
git checkout dev 切换dev 分支
git branch -D 分支名  删除分支  删除分支时 用户不能在当前分支上

git checkout -b dev 创建并切换到dev分支

git merge dev 合并dev分支
```



## linux命令

- pwd 查看路径
- rm -rf 文件夹 删除文件
- rm 文件名 删除文件
- mkdir  创建目录
- cd 进入文件
- ls -al 显示目录下所有文件
- touch 创建文件
- cat 查看文件
- vi 编辑文件
 - :q 退出  :q! 强制退出 :wq 保存退出