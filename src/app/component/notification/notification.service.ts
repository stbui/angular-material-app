import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { Activate } from './notification.interface';
import { NotificationRef } from './notification.ref';
import { NotificationInjector } from './notification.injector';
import { NotificationModel } from './notification.model';

@Injectable()
export class NotificationService {

  toasts: Activate[] = [];

  constructor(private _injector: Injector, private _overlay: Overlay) {
  }

  show(message?: string, title?: string, type = '') {
    return this._buildNotification(type, message, title);
  }

  private _buildNotification(type: string, message: string, title: string) {
    const overlayRef = this._overlay.create();
    const notificationRef = new NotificationRef(overlayRef);
    const notificationModel = new NotificationModel(1, message, title);
    const notificationInjector = new NotificationInjector(notificationModel, this._injector);
    // const component = new ComponentPortal()
  }

}
