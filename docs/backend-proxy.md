# angular本地联调使用方法


* 方法一：开启chrome安全策略跨域

```
open -a "Google Chrome" --args --disable-web-security  --user-data-dir
```
google 浏览器桌面快捷方式后面加上(空一格，再加上)  

```
 --disable-web-security --user-data-dir
```


* 方法二：在项目根目录下添加 *proxy.conf.js* 文件，内容如下

```
'use strict';

const proxyConfig = [
  {
    context: '/api',
    pathRewrite: { '^/api': '' },
    target: 'http://api.stbui.com',
    changeOrigin: true,
    secure: false
  }
];

module.exports = proxyConfig;
```

通过ng server 来代理请求

```
ng serve --proxy-config proxy.conf.js
```


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
