# Docker

> 构建镜像
`docker build -t angular-material-app .`

> 运行容器
`docker run -d -p 8080:8080 --name angular-material-app --restart always angular-material-app`


Dokckerfile

```
FROM node:latest

RUN npm -g config set user root
RUN npm install -g @angular/cli@latest  http-server
WORKDIR /stbui
COPY . /stbui
RUN npm install && npm run build
RUN cp ./dist ./

EXPOSE 8080

CMD http-server -d

```
