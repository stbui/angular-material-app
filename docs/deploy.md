# 部署

* 打包产线环境资源，生成到dist目录
```
npm run build                
```

* 打包github环境资源，生成到dist目录
```
npm run build:github
```

## angular-cli 命令说明

* 打包产线环境资源，生成到dist目录
```
ng build --environment=prod --extract-css --prod --aot
```
```
--environment=prod  指定应用执行prod环境
--extract-css       抽出css并生成文件
--aot               开启aot
--prod              构建时会加入treeshaking、代码压缩混淆等
```

* 打包github环境资源，生成到dist目录
```
ng build --environment=github --extract-css --prod --aot --base-href=https://stbui.github.io/angular-material-app/
```
```
--base-href         指定站点起始路
```

## 参考资源
- https://github.com/angular/angular-cli/wiki
