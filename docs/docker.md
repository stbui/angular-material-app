# Docker

## 起步

* 构建镜像
```
docker build -t angular-material-app .
```

* 运行容器
```
docker run -d -p 8080:8080 --name angular-material-app --restart always angular-material-app
```

## 快速部署
拉取docker仓库中的镜像
```
docker run -d -P stbui/angular-material-app
```

## 参考资源
- https://www.docker.com/
