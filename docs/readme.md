# angular-material-app

欢迎阅读项目文档

# 项目结构

```
dist/                        产线资源目录
docs/                        项目文档
e2e/                         end-to-end tests
src/                         项目源码
|- app/                      应用组件
|  |- core/                  core module
|  |- shared/                共用模块  (common components, directives and pipes)
|  |- app.component.*        根组件
|  |- app.module.ts          根模块
|  |- app-routing.module.ts  根路由
|  +- ...                    其他模块和组件
|- assets/                   资源文件
|- environments/             构建环境配置目录
|- index.html                页面入口
|- styles.scss               全局样式入口
|- main.ts                   应用入口
|- polyfills.ts              
+- test.ts                   单元测试入口
proxy.conf.js                后台接口协议配置
```

命令说明
```
npm run start                
npm run start:api             
npm run build                
npm run build:github         构建github.io资源      
npm run publish:github       发布到github.io     
npm run docs                 构建文档
```
