#!/usr/bin/env bash


# build
echo ">>>>>>>>>> 打包 <<<<<<<<<<"
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular-material-app' --platform=darwin --arch=x64 --out=packager --version=0.5.2 --overwrite
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular-material-app' --platform=linux --arch=x64 --out=packager --version=0.5.2 --overwrite
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular-material-app' --platform=win32 --arch=x64 --out=packager --version=0.5.2 --overwrite
electronPackagerBin = $(npm bin)/electron-packager ./dist 'angular-material-app' --platform=win32 --arch=ia32 --out=packager --version=0.5.2 --overwrite

# zip
echo ">>>>>>>>>> 压缩 <<<<<<<<<<"
rm -f ./packager/angular-material-app-*.zip
zip -ry ./packager/angular-material-app-macOS-x64.zip ./packager/angular-material-app-darwin-x64/angular-material-app.app
zip -ry ./packager/angular-material-app-linux-x64.zip ./packager/angular-material-app-linux-x64
zip -ry ./packager/angular-material-app-win32-x64.zip ./packager/angular-material-app-win32-x64
zip -ry ./packager/angular-material-app-win32-ia32.zip ./packager/angular-material-app-win32-ia32
