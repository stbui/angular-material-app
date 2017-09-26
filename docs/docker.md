# Docker

`docker build -t angular-material-app .`

`docker run -d -p 4200:4200 angular-material-app`


Dokckerfile

```
FROM node:latest

RUN npm -g config set user root
RUN npm install -g @angular/cli@latest  http-server
WORKDIR /stbui
COPY . /stbui
RUN npm install && npm run build
RUN cd ./dist

EXPOSE 8080

CMD http-server -d

```
