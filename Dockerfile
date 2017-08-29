FROM node:latest

RUN npm install -g @angular/cli
WORKDIR /stbui
COPY . /stbui
RUN npm install

EXPOSE 4200

CMD ["ng", "serve"]
