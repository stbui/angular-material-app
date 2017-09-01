import { Injector } from '@angular/core';
import { NotificationModel } from './notification.model';


export class NotificationInjector implements Injector {

  constructor(private _notificationModel: NotificationModel, private _injector: Injector) {

  }

  get(token: any, notFoundValue?: any) {
    return this._injector.get(token, notFoundValue);
  }
}
