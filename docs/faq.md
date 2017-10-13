# FAQ

##### window 上安装angular cli 依赖报错

```
execSync@1.0.2 install C:\Users\User\AppData\Roaming\npm\node_modules\angu
lar-cli\node_modules\angular2-template-loader\node_modules\codecov\node_modules\
execSync
 node install.js

[execsync v1.0.2] Attempting to compile native extensions.
{ [Error: spawn node-gyp ENOENT]
  code: 'ENOENT',
  errno: 'ENOENT',
  syscall: 'spawn node-gyp',
  path: 'node-gyp',
  spawnargs: [ 'rebuild' ] }
[execSync v1.0.2]
    Native code compile failed!!
    Will try to use win32 extension.
npm WARN deprecated tough-cookie@2.2.2: ReDoS vulnerability parsing Set-Cookie h
ttps://nodesecurity.io/advisories/130
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher
to avoid a RegExp DoS issue
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher
 to avoid a RegExp DoS issue

 node-zopfli@2.0.1 install C:\Users\User\AppData\Roaming\npm\node_modules\a
ngular-cli\node_modules\compression-webpack-plugin\node_modules\node-zopfli
 node-pre-gyp install --fallback-to-build
.......................
```

> 安装 node-gyp

```
npm install -g node-gyp
```

```
npm install --global windows-build-tools
```
```
npm install -g angular-cli
```
