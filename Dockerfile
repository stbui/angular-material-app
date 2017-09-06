FROM node:latest

RUN npm -g config set user root
RUN npm install -g @angular/cli@latest
WORKDIR /stbui
COPY . /stbui
RUN npm install --quiet --production --no-progress --registry=${registry:-https://registry.npmjs.org} && \
    npm cache clean --force

EXPOSE 4200

CMD npm run start
