import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayState } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';

import { NotificationRef } from './notification.ref';
import { NotificationInjector } from './notification.injector';
import { NotificationConfig } from './notification.config';
import { NotificationComponent } from './notification.component';

export interface Activate {
  id?: number;
  message?: string;
  portal?: ComponentRef<any>;
  notificationRef: NotificationRef<any>;
  onShown?: Observable<any>;
  onHidden?: Observable<any>;
  onTap?: Observable<any>;
  onAction?: Observable<any>;
}


@Injectable()
export class NotificationService {

  notifications: Activate[] = [];
  private index = 0;

  constructor(private _injector: Injector,
              private _overlay: Overlay) {
  }

  show(message?: string, title?: string, config?: NotificationConfig, type = '') {
    return this.open(message, title, config, type);
  }

  success(message?: string, title?: string, config?: NotificationConfig, type = '') {
    return this.open(message, title, config, type);
  }

  error(message?: string, title?: string, config?: NotificationConfig, type = '') {
    return this.open(message, title, config, type);
  }

  info(message?: string, title?: string, config?: NotificationConfig, type = '') {
    return this.open(message, title, config, type);
  }


  private _findNotificatoin(id: number) {
    for (let i = 0; i < this.notifications.length; i++) {
      if (this.notifications[i].id === id) {
        return {index: i, active: this.notifications[i]};
      }
    }

    return null;
  }

  remove(id: number) {
    const result = this._findNotificatoin(id);
    result.active.notificationRef.close();
    this.notifications.splice(result.index, 1);
  }


  open(message?: string, title?: string, config?: NotificationConfig, type = '') {
    const overlayRef = this._createOverlay(config);

    this.index += 1;

    const notificationRef = new NotificationRef(overlayRef);

    const notificationConfig = new NotificationConfig(this.index, config, message, title, type, notificationRef);

    const ins: Activate = {
      id: this.index,
      message,
      notificationRef,
      onShown: notificationRef.afterActivate(),
      onHidden: notificationRef.afterActivate(),
      onTap: notificationConfig.onTap(),
      onAction: notificationConfig.onAction(),
    };

    const injector = this._createInjector(notificationConfig, notificationRef);
    const component = new ComponentPortal(NotificationComponent, undefined, injector);
    ins.portal = overlayRef.attach(component);

    this.notifications.push(ins);

    return ins;
  }

  private _createOverlay(config?: NotificationConfig) {
    const state = new OverlayState();
    return this._overlay.create(state);
  }

  private _createInjector<T>(config: NotificationConfig, notificationRef: NotificationRef<T>) {
    return new NotificationInjector(config, this._injector);
  }

}
