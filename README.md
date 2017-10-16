# 通用管理系统快速开发框架 [![国内demo](https://img.shields.io/badge/%e5%9b%bd%e5%86%85-demo-brightgreen.svg?style=flat-square)](http://stbui.oss-cn-beijing.aliyuncs.com/angular-material-app/index.html)  [![国外demo](https://img.shields.io/badge/%e5%9b%bd%e5%a4%96-demo-brightgreen.svg?style=flat-square)](https://surgeon-canary-67612.netlify.com/)  [![github](https://img.shields.io/badge/github-demo-brightgreen.svg?style=flat-square)](https://stbui.github.io/angular-material-app/) [![国外doc](https://img.shields.io/badge/%e5%9b%bd%e5%a4%96-doc-brightgreen.svg?style=flat-square)](https://translator-rhinoceros-87537.netlify.com/)

基于最新`Angular 4`框架与`Material 2`技术的企业级通用管理系统快速开发框架，涵盖了大量的常用组件和基础功能，您可以快速开发各种MIS系统，如CMS、OA、CRM、ERP、POS等，最大程度上帮助企业节省时间成本和费用开支。

[![Travis](https://travis-ci.org/stbui/angular-material-app.svg?branch=master)](https://travis-ci.org/stbui/angular-material-app)
[![Docker Build Statu](https://img.shields.io/docker/build/stbui/angular-material-app.svg?style=flat-square)](https://hub.docker.com/r/stbui/angular-material-app/)
[![Dependency Status](https://img.shields.io/david/stbui/angular-material-app.svg?style=flat-square)](https://david-dm.org/stbui/angular-material-app)
[![devDependency Status](https://img.shields.io/david/stbui/angular-material-app.svg?style=flat-square)](https://david-dm.org/stbui/angular-material-app?type=dev)
[![Join the chat at https://gitter.im/angular-material-app](https://badges.gitter.im/stbui/angular-material-app.svg)](https://gitter.im/angular-material-app/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![Powered_by](https://img.shields.io/badge/Powered_by-stbui-green.svg?style=flat)](https://github.com/stbui/angular-material-app)


### 平台环境

[![Angular](https://img.shields.io/badge/Angular%204-4.0.0-brightgreen.svg?style=flat-square)](https://github.com/angular/angular)
[![Angular-cli](https://img.shields.io/badge/Angular.cli-1.4.2-brightgreen.svg?style=square)](https://github.com/angular/angular-cli)
[![Angular Mateiral 2](https://img.shields.io/badge/Material%202-2.0.0.beta.12-brightgreen.svg?style=square)](https://github.com/angular/material2)
[![Flex-Layout](https://img.shields.io/badge/Flex.Layout-2.0.0.beta.9-brightgreen.svg?style=square)](https://github.com/angular/flex-layout)


### 基本功能

- 支持 docker 构建镜像
- 支持 electron 构建桌面应用
- 接入 firebase, 关联google账户和github账户登录
- 真实场景mock数据
- material design 
- 内置3套主题，供自由切换
- 多种颜色方案，有多个预定义的配色方案
- Flex Layout 强大的布局
- 响应式设计
- 内置常用组件
- 1500+ 图标, 包括 900+ 官方 material design 图标
- Sass/Scss CSS, 很容易通过改变一些变量的更新
- 模块代码，添加和删除非常轻松
- Webpack 2 构建项目
- 定期更新，不断更新新功能

![demo image](src/assets/images-demo/20170802104620.png)


### 使用入门

```
git clone --depth=1 https://github.com/stbui/angular-material-app.git
cd angular-material-app
npm install
npm run start
```
打开你的浏览器，访问
```
http://127.0.0.1:4200
```

### 发布

```
npm run build
```


# Docker

## 起步

* 构建镜像
```
docker build -t angular-material-app .
```

* 运行容器
```
docker run -d -p 8080:8080 --name angular-material-app --restart always angular-material-app
```

## 快速部署
拉取docker仓库中的镜像
```
docker run -d -P stbui/angular-material-app
```


# Electron

使用Electron构建桌面应用

## 项目分支
```
feature/electron
```

## 起步

* 构建静态资源
```
npm run build:electron
```
* 启动项目
```
npm run electron
```

## 打包

* mac 平台
```
npm run build:darwin
```
* window 平台
```
npm run build:win32
```


# Firebase

主要对接功能：
* google 登录
* github 登录
* 游客登录
* 邮箱登录与注册
* 文件上传模块
* 聊天应用模块

## 项目分支
```
feature/firebase
```

## 起步（教程）

### hosting

* 安装 Firebase cli
```
npm install -g firebase-tools
```

* 登录firebase
```
firebase login
```

* 初始化成firebase
```
firebase init
```

* 推送到firebase
```
firebase deploy
```

### Authentication
```
npm install firebase angularfire2 --save
```

### Universal
