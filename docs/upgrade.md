# angular升级

* 卸载老版本
```
npm uninstall -g @angular/cli
npm uninstall --save-dev @angular/cli
```

```
rm -rf node_modules
npm cache clean
```

* 安装
```
npm install -g @angular/cli@latest
npm install --save-dev @angular/cli@latest
npm install


```
npm install --save @angular/{animations,common,compiler,core,forms,http,platform-browser,platform-browser-dynamic,router,service-worker}

npm install --save @angular/{cdk,material,flex-layout}

npm install --save-dev @angular/{compiler-cli,language-service}
```