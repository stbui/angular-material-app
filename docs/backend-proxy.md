# angular本地联调使用方法


* 方法一：开启chrome安全策略跨域

```
open -a "Google Chrome" --args --disable-web-security  --user-data-dir
```
google 浏览器桌面快捷方式后面加上(空一格，再加上)  

```
 --disable-web-security --user-data-dir
```


* 方法二：在项目根目录下添加 *proxy.conf.jsson* 文件，内容如下

```
{
  "/api": {
    "target": "http://api.stbui.com",
    "secure": false
  }
}
```

通过ng server 来代理请求

```
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "angular-material-ape:build",
      "proxyConfig": "src/proxy.conf.json"
    },
```
ng serve


# 对接第三应用及微信配置相关

* 微信认证跳转
微信认证跳转需要验证域名，通过修改host
```
127.0.0.1 wx.qq.com
```
* 添加启动命令
```
ng serve --disable-host-check
```
