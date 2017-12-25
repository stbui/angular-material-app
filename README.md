# 通用管理系统快速开发框架 [![国内demo](https://img.shields.io/badge/%e5%9b%bd%e5%86%85-demo-brightgreen.svg?style=flat-square)](http://stbui.oss-cn-beijing.aliyuncs.com/angular-material-app/index.html)  [![国外demo](https://img.shields.io/badge/%e5%9b%bd%e5%a4%96-demo-brightgreen.svg?style=flat-square)](https://surgeon-canary-67612.netlify.com/)  [![github](https://img.shields.io/badge/github-demo-brightgreen.svg?style=flat-square)](https://stbui.github.io/angular-material-app/) [![国外doc](https://img.shields.io/badge/%e5%9b%bd%e5%a4%96-doc-brightgreen.svg?style=flat-square)](https://translator-rhinoceros-87537.netlify.com/)

基于最新`Angular 5`框架与`Material 2`技术的企业级通用管理系统快速开发框架，涵盖了大量的常用组件和基础功能，您可以快速开发各种MIS系统，如CMS、OA、CRM、ERP、POS等，最大程度上帮助企业节省时间成本和费用开支。

[![Travis](https://travis-ci.org/stbui/angular-material-app.svg?branch=master)](https://travis-ci.org/stbui/angular-material-app)
[![Docker Build Status](https://img.shields.io/docker/build/stbui/angular-material-app.svg?style=flat-square)](https://hub.docker.com/r/stbui/angular-material-app/)
[![Dependency Status](https://img.shields.io/david/stbui/angular-material-app.svg?style=flat-square)](https://david-dm.org/stbui/angular-material-app)
[![devDependency Status](https://img.shields.io/david/stbui/angular-material-app.svg?style=flat-square)](https://david-dm.org/stbui/angular-material-app?type=dev)
[![Join the chat at https://gitter.im/angular-material-app](https://badges.gitter.im/stbui/angular-material-app.svg)](https://gitter.im/angular-material-app/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![Powered_by](https://img.shields.io/badge/Powered_by-stbui-green.svg?style=flat)](https://github.com/stbui/angular-material-app)


### 平台环境

[![Angular](https://img.shields.io/badge/Angular%205-5.1.2-brightgreen.svg?style=flat-square)](https://github.com/angular/angular)
[![Angular-cli](https://img.shields.io/badge/Angular.cli-1.6.2-brightgreen.svg?style=square)](https://github.com/angular/angular-cli)
[![Angular Material 2](https://img.shields.io/badge/Material%202-5.0.2-brightgreen.svg?style=square)](https://github.com/angular/material2)
[![Flex-Layout](https://img.shields.io/badge/Flex.Layout-2.0.0.beta.12-brightgreen.svg?style=square)](https://github.com/angular/flex-layout)
[![Angular FireBase](https://img.shields.io/badge/Firebase-5.0.0.rc.4-brightgreen.svg?style=square)](https://github.com/angular/angularfire2)


### 特性

- 基于 Material Design 精心设计
- 多种颜色方案，有多个预定义的配色方案
- Flex Layout 强大的布局,并支持响应式设计
- 内置常用组件，提炼后台应用的典型页面和场景
- 实用的本地数据调试方案
- 支持 docker 构建镜像
- 支持 electron 构建桌面应用
- 支持 pwa
- 接入 firebase, 关联google账户和github账户登录
- 模块代码，添加和删除非常轻松
- 不定期更新，不断更新新功能
- 使用前端前沿技术开发

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

## 起步

* 安装依赖环境
node ./scripts/electron/install.js

* 构建静态资源
```
npm run build-prod-electron
```

* 启动项目
```
npm run start:electron
```

## 打包
```
npm run build-pack-electron
```
文件生成在*packager*目录中


# Firebase

主要对接功能：
* google 登录
* github 登录
* 游客登录
* 邮箱登录与注册
* 文件上传模块
* 聊天应用模块

* [docs](docs/firebase.md)

# PWA

* [docs](docs/pwa.md)

### Universal

* [docs](docs/universal.md)

# 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起贡献：
* 在你的公司或个人项目中使用项目。
* 通过 [Issue](https://github.com/stbui/angular-material-app/issues) 报告 bug 或进行咨询。
* 提交 [Pull Request](https://github.com/stbui/angular-material-app/pulls) 来改进。
