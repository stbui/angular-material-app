# Universal

```
npm install --save-dev @angular/platform-server
```

src/app/app.module.ts:
```
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    ...
  ],

})
export class AppModule {}
```


src/app/app.server.module.ts:
```
import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```


src/main.server.ts:
```
export {AppServerModule} from './app/app.server.module';
```

src/tsconfig.server.json:
```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "baseUrl": "./",
    "module": "commonjs",
    "types": []
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ],
  "angularCompilerOptions": {
    "entryModule": "app/app.server.module#AppServerModule"
  }
}
```

.angular-cli.json:
```
{
  ...
  "apps": [
    {
      // Keep your original application config intact here.
      // It will be app 0.
    },
    {
      // This is your server app. It is app 1.
      "platform": "server",
      "root": "src",
      // Build to dist-server instead of dist. This prevents
      // client and server builds from overwriting each other.
      "outDir": "dist-server",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      // Change the main file to point to your server main.
      "main": "main.server.ts",
      // Remove polyfills.
      // "polyfills": "polyfills.ts",
      "test": "test.ts",
      // Change the tsconfig to point to your server config.
      "tsconfig": "tsconfig.server.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  ...
}
```
