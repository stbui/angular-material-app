FROM nginx:latest

WORKDIR /stbui.stbui.com


COPY . /usr/share/nginx/html

EXPOSE 80
