FROM node:latest

RUN npm install -g @angular/cli
WORKDIR /stbui.stbui.com
COPY . /stbui.stbui.com

EXPOSE 4200

CMD ["ng", "serve"]
