# travis ci 配置

travis.yml

```
language: node_js
node_js:
  - '8'
branches:
  only:
    - master
install:
  - npm install -g @angular/cli
  - npm install
script:
  - npm run build:github
after_script:
  - cd ./dist
  - git init
  - git config user.name "stbui"
  - git config user.email "w431106@163.com"
  - git add .
  - git commit -m "Travis CI Auto Builder"
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
cache:
  directories:
    - node_modules
env:
  global:
    - GH_REF: github.com/stbui/angular-material-app.git

```