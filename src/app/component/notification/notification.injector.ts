import { Injector } from '@angular/core';
import { NotificationConfig } from './notification.config';


export class NotificationInjector implements Injector {

  constructor(private _notificationConfig: NotificationConfig, private _injector: Injector) {

  }

  get(token: any, notFoundValue?: any) {

    if (token === NotificationConfig && this._notificationConfig) {
      return this._notificationConfig;
    }
    return this._injector.get<any>(token, notFoundValue);
  }
}
