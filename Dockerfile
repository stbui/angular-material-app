FROM node:6-alpine

RUN npm install -g @angular/cli@1.0.0
WORKDIR /stbui.stbui.com
COPY . /stbui.stbui.com

EXPOSE 4200

CMD ["ng", "serve"]
