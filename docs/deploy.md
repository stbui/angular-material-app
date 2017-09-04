# 部署

在本地启动服务，并代理后台接口

```
ng serve --proxy-config proxy.conf.js
```

编译产线环境包，并将css抽出来生成文件

```
ng build --environment=prod --extract-css --prod --aot
```

编译指定域名
```
ng build --environment=github --extract-css --prod --aot --base-href=https://stbui.github.io/angular-material-app/
```
