# 中后台前端应用框架

基于最新`Angular 7`框架与`Material 2`技术的企业级中后台前端应用框架，涵盖了大量的常用组件和基础功能，您可以快速开发各种后台系统，最大程度上帮助企业节省时间成本和费用开支。

- [快速入门](start.md)
- [样式](css.md)
- [组件](component.md)
  - [github-button](../src/componet/github-button/github-button.md)
  - [通知](../src/componet/notification/notification.md)
  - [气泡](../src/componet/popover/popover.md)
  - [表格](../src/componet/table/table.md)
  - [高德地图](../src/componet/amap/amap.md)
  - [分页](../src/componet/pagination/pagination.md)
- [部署](deploy.md)
- [接口代理](backend-proxy.md)
- [docker](docker.md)
- [electron](electron.md)
- [material icon](icon.md)
- [常见问题](faq.md)

---

# 项目结构

```
dist/                        产线资源目录
docs/                        项目文档
e2e/
src/                         项目源码
|- app/                      应用组件
|  |- component              公共组件
|  |- layouts                布局组件
|  |- core/                  核心模块
|  |- shared/                共用模块
|  |- app.component.*        根组件
|  |- app.module.ts          根模块
|  |- app-routing.module.ts  根路由
|  +- ...                    其他模块和组件
|- assets/                   资源文件
|- environments/             构建环境配置目录
|- index.html                页面入口
|- styles.scss               全局样式入口
|- main.ts                   应用入口
|- polyfills.ts              兼容代码
+- test.ts                   单元测试入口
proxy.conf.js                后台接口代理
```

命令说明

```
npm run start
npm run build
npm run build:github         构建github.io资源
npm run publish:github       发布到github.io
npm run docs                 构建文档
```
