# 后台接口代理配置

`ng serve --proxy-config proxy.conf.json`

```
const proxyConfig = [
  {
    context: '/api',
    pathRewrite: { '^/api': '' },
    target: 'http://api.stbui.com',
    changeOrigin: true,
    secure: false
  }
];
```
