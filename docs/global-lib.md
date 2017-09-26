# 全局库使用

```
npm install normalize --save
npm install material-icons --save
npm install Chart --save
```

* .angular-cli.json *

```
"styles": [
  "../node_modules/normalize.css/normalize.css",
  "../node_modules/material-design-icons/iconfont/material-icons.css",
  "../node_modules/quill/dist/quill.snow.css",
  "styles.scss"
],
      
```

```
"scripts": [
  "../node_modules/chart.js/dist/Chart.js"
  ],
```

# 第三方库

"scripts": [
  {"input": "../node_modules/chart.js/dist/Chart.js", "lazy": true}
],
