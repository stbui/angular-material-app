FROM node:6-alpine

RUN apk update \
  && apk add --update alpine-sdk \
  && npm install -g @angular/cli@1.0.0 \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clear \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

WORKDIR /app

EXPOSE 4200

CMD ["ng","serve", "-h","0.0.0.0"]
