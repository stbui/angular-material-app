# 全局库使用

- angular.json

```
{
  projects: {
    architect: {
      build: {
        options: {
          styles: "styles": [
              { "input": "node_modules/normalize.css/normalize.css", "bundleName": "lib" },
              { "input": "node_modules/material-design-icons/iconfont/material-icons.css", "bundleName": "lib" },
              { "input": "node_modules/quill/dist/quill.snow.css", "bundleName": "lib" },
              { "input": "src/styles.scss", "bundleName": "stbui" }
            ],
          scripts: [
            "../node_modules/chart.js/dist/Chart.js"
          ]
        }
      }
    }
  }
}
```
