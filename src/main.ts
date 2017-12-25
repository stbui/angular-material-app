import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if (environment['ngsw']) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./ngsw-worker.js');
    }
  }
});
