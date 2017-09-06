FROM node:alpine

RUN npm install -g @angular/cli --verbose --registry=https://registry.npm.taobao.org
WORKDIR /stbui
COPY . /stbui
RUN npm install --verbose --registry=https://registry.npm.taobao.org

EXPOSE 4200

CMD ["ng", "serve"]
