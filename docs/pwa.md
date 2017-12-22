# pwa

```
npm i -S @angular/service-worker
```

angular-cli.json
```
"apps": [
  {
    "serviceWorker": true
  }
],
```

app.module.ts
```
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  imports: [
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ]
})
export class AppModule { }
```

main.ts
```
platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ngsw-worker.js') ;
  }
});
```

ngsw-config.json
```
{
  "index": "/index.html",
  "appData": {
    "name": "angular-material-app-pwa",
    "description": "pwa"
  },
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html"
        ],
        "versionedFiles": [
          "/*.bundle.css",
          "/*.bundle.js",
          "/*.chunk.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**"
        ]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api-freshness",
      "urls": [
        "/stbui"
      ],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 100,
        "maxAge": "3d",
        "timeout": "10s"
      }
    }
  ]
}
```

manifest.json
```
{
  "dir": "ltr",
  "lang": "en",
  "name": "angular-material-app-pwa",
  "scope": "/",
  "display": "standalone",
  "start_url": "./?utm_source=web_app_manifest",
  "short_name": "PWA",
  "theme_color": "#3F51B5",
  "description": "",
  "orientation": "any",
  "background_color": "#2B303B",
  "related_applications": [],
  "prefer_related_applications": false,
  "icons": [
    {
      "src": "./assets/favicon/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./assets/favicon/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

```

package.json
```
{
  "scripts": {
    "ngsw-config": "./node_modules/.bin/ngsw-config dist src/ngsw-config.json",
    "ngsw-copy": "cp node_modules/@angular/service-worker/ngsw-worker.js dist/",
    "build-prod-ngsw": "npm run build && npm run ngsw-config && npm run ngsw-copy",
    "build-github-ngsw": "npm run build:github && npm run ngsw-config && npm run ngsw-copy"
  }
}
```
