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
