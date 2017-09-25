# 通用管理系统快速开发框架 [demo](https://stbui.github.io/angular-material-app/)

基于最新`Angular 4`框架与`Material 2`技术的企业级通用管理系统快速开发框架，涵盖了大量的常用组件和基础功能，您可以快速开发各种MIS系统，如CMS、OA、CRM、ERP、POS等，最大程度上帮助企业节省时间成本和费用开支。

[![Travis](https://travis-ci.org/stbui/angular-material-app.svg?branch=master)](https://travis-ci.org/stbui/angular-material-app)
[![Docker Build Statu](https://img.shields.io/docker/build/stbui/angular-material-app.svg?style=flat-square)](https://hub.docker.com/r/stbui/angular-material-app/)
[![Dependency Status](https://img.shields.io/david/stbui/angular-material-app.svg?style=flat-square)](https://david-dm.org/stbui/angular-material-app)
[![devDependency Status](https://img.shields.io/david/stbui/angular-material-app.svg?style=flat-square)](https://david-dm.org/stbui/angular-material-app?type=dev)
[![Github All Releases](https://img.shields.io/github/downloads/stbui/angular-material-app/total.svg)](http://www.stbui.com)
[![Join the chat at https://gitter.im/angular-material-app](https://badges.gitter.im/stbui/angular-material-app.svg)](https://gitter.im/angular-material-app/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)


### 平台环境

[![Angular](https://img.shields.io/badge/Angular%204-4.0.0-brightgreen.svg?style=flat-square)](https://github.com/angular/angular)
[![Angular-cli](https://img.shields.io/badge/Angular.cli-1.2.5-brightgreen.svg?style=square)](https://github.com/angular/angular-cli)
[![Angular Mateiral 2](https://img.shields.io/badge/Material%202-2.0.0.beta.10-brightgreen.svg?style=square)](https://github.com/angular/material2)
[![Flex-Layout](https://img.shields.io/badge/Flex.Layout-2.0.0.beta.9-brightgreen.svg?style=square)](https://github.com/angular/flex-layout)

[![Scss](https://img.shields.io/badge/Scss-latest-brightgreen.svg?style=flat-square)](https://github.com/sass/sass)
[![Typescript](https://img.shields.io/badge/Typescript-latest-brightgreen.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![rxjs](https://img.shields.io/badge/rxjs-5.4.1-brightgreen.svg?style=flat-square)](https://github.com/Reactive-Extensions/RxJS)


### 基本功能
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
ng build --prod --aot --env=prod --extract-css
```


### Docker

快速部署

```
docker pull stbui/angular-material-app
docker run -d -P stbui/angular-material-app
```
或
```
docker run --rm --name angular-material-app -v "$PWD":/usr/src/app -w /usr/src/app -p 4200:4200 -it node:latest bash -c "npm install && npm start"
```

### document

https://translator-rhinoceros-87537.netlify.com/

https://surgeon-canary-67612.netlify.com/


### Firebase

##### hosting

将build后的静态资源托管到hosting
> 安装 Firebase cli
```
npm install -g firebase-tools
```
```
firebase login
firebase init
firebase deploy
```

#### Authentication
```
npm install firebase angularfire2 --save
```



### Electron


### universal
