
# myVueTest
我的vue练习

##本地安装

cnpm install vue -g  

vue init webpack my-vue-test

? Project name my-vue-test 项目名默认

? Project description A Vue.js project 项目介绍默认

? Author nidun <nidunlove@163.com> 作者默认

? Vue build standalone （打包方式）

? Install vue-router? Yes 安装vue路由

? Use ESLint to lint your code? No 安装eslint（ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。）

? Set up unit tests No （vue单元测试）

? Setup e2e tests with Nightwatch? No （E2E测试）

? Should we run `npm install` for you after the project has been created? (recommended) npm

//全选yes 会安装卡顿，试了两次，暂时不安装，原因之后再研究。

##安装依赖，并运行到开发环境

cd my-vue-test

cnpm install

cnpm run dev

cnpm run build（注意修改 config/index.js 的assetsPublicPath路径）

打开浏览器访问http://localhost:8080/，开发环境。
打开浏览器访问http://localhost:8080/dist/index.html，线上环境。

##上传到github

登录并新建仓库，编辑readme。

https或ssh上传。

此用ssh命令行 (需要建立ssh key)。

文件夹右键 git bash

 cd 文件夹
 
 git init
 
 git status （当前状态）
 
 git add .
 
 git status
 
 git commit -m "myvue" (准备提交和介绍，好像不加介绍会报错)
 
git reset （需要撤销，此可撤销）

git push origin master
 
报了很多错，一步步解决了.....

## 再次提交 2018.03.29

参考：https://www.cnblogs.com/springlight/p/6282152.html

1.打开GitBase

2.切换到项目文件

将本地文件添加到本地缓存库和提交到本地分支，如下命令

3.git add .      //将所有的本地文件提交到缓存中；后面的 . 代表所有文件；

4.git commit -m "commit all file"  //将所有文件提交到本地库中

提交本地到远程库

5.$ git push -u origin master //第一次提交 添加命令参数 -u 确保关联本地库和远程库

6.$ git push origin master //非第一次提交使用此命令即可
