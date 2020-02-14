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

## 本地文件提交 -> gitbub

- 现有gitbub账号 一个仓库
- git remote add origin '地址'  关联远程仓库
- git push -u origin master



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


### git commit前规范检查

类似与vue的生命周期钩子，git的版本也存在生命周期 git hooks。

- pre-commit:在comment前触发
- pre-push：在push前触发

### husky 配置

Husky 是一个为 git 客户端增加 hook 的工具，将其安装到项目中，会自动在 .git 目录下增加相应的钩子

在 packjson 中添加配置项：
```
scripts:{},

"husky": {
  "hooks": {
    "pre-commit": "npm run lint:style && npm run lint:css && npm run lint"
  }
}

```
以上，在每次提交之前，都会按照配置的 eslint-config 和 stylelint-config 进行业务代码 js 和 css 样式检查