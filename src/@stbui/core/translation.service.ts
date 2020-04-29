import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translateService: TranslateService) {}

  loadTranslations(...args): void {
    const locales = [...args];

    locales.forEach((locale) => {
      this.translateService.setTranslation(locale.lang, locale.data, true);
    });
  }
}
