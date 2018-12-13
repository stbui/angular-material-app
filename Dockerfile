FROM node:latest

RUN npm -g config set user root
RUN npm install -g http-server
WORKDIR /stbui
COPY . /stbui
RUN npm install && npm run build
RUN cd ./dist

EXPOSE 8080

CMD http-server -d