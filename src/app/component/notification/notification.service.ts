import { ComponentRef, Injectable, Injector, Inject } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';

import { NotificationRef } from './notification.ref';
import { NotificationInjector } from './notification.injector';
import { NotificationConfig } from './notification.config';
import { NotificationComponent } from './notification.component';
import { NotificationInterface } from './notification.interface';
import { STBUI_NOTIFICATION_DATA } from './notification.token';

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
              private _overlay: Overlay,
              @Inject(STBUI_NOTIFICATION_DATA) public config: NotificationInterface) {

    this.config = this._applyConfig(config);

    if (!this.config.iconClasses) {
      this.config.iconClasses = {};
    }
    this.config.iconClasses.error = this.config.iconClasses.error || 'notification-error';
    this.config.iconClasses.info = this.config.iconClasses.info || 'notification-info';
    this.config.iconClasses.success = this.config.iconClasses.success || 'notification-success';
    this.config.iconClasses.warning = this.config.iconClasses.warning || 'notification-warning';

    this.config.closeButton = this._use(config, this.config.closeButton, false);
    this.config.notificationClass = this._use(config, this.config.notificationClass, 'notification');
    this.config.positionClass = this._use(config, this.config.positionClass, 'notification-top-right');
    this.config.titleClass = this._use(config, this.config.titleClass, 'notification-title');
    this.config.messageClass = this._use(config, this.config.messageClass, 'notification-message');
    this.config.notificationComponent = this._use(config, this.config.notificationComponent, NotificationComponent);
  }

  show(message?: string, title?: string, config?: NotificationInterface, type = '') {
    return this.open(message, title, this._applyConfig(config), type);
  }

  success(message?: string, title?: string, config?: NotificationInterface) {
    const type = this.config.iconClasses.success || '';
    return this.open(message, title, this._applyConfig(config), type);
  }

  error(message?: string, title?: string, config?: NotificationInterface) {
    const type = this.config.iconClasses.error || '';
    return this.open(message, title, this._applyConfig(config), type);
  }

  info(message?: string, title?: string, config?: NotificationInterface) {
    const type = this.config.iconClasses.info || '';
    return this.open(message, title, this._applyConfig(config), type);
  }

  remove(id: number) {
    const result = this._findNotification(id);
    result.active.notificationRef.close();
    this.notifications.splice(result.index, 1);
  }

  clear(id?: number) {
    for (const notification of this.notifications) {
      if (id !== undefined) {
        if (notification.id === id) {
          notification.notificationRef.manualClose();
          return;
        }
      } else {
        notification.notificationRef.manualClose();
      }
    }
  }

  open(message?: string, title?: string, config?: NotificationInterface, type: string = '') {
    if (!config.notificationComponent) {
      throw new Error('notificationComponent required');
    }

    // todo message与之前比较一样不在重新创建

    this.index += 1;
    const overlayRef = this._createOverlay();
    const notificationRef = new NotificationRef(overlayRef);
    const notificationConfig = new NotificationConfig(this.index, config, message, title, type, notificationRef);
    const injector = this._createInjector(notificationConfig, notificationRef);
    const component = new ComponentPortal(config.notificationComponent, undefined, injector);

    const instance: Activate = {
      id: this.index,
      message,
      notificationRef,
      onShown: notificationRef.afterActivate(),
      onHidden: notificationRef.afterActivate(),
      onTap: notificationConfig.onTap(),
      onAction: notificationConfig.onAction(),
      portal: overlayRef.attach(component)
    };

    setTimeout(() => {
      instance.notificationRef.activate();
    });

    this.notifications.push(instance);

    return instance;
  }

  private _createOverlay(config?: NotificationInterface) {
    const state = new OverlayConfig();
    return this._overlay.create(state);
  }

  private _createInjector<T>(config: NotificationConfig, notificationRef: NotificationRef<T>) {
    return new NotificationInjector(config, this._injector);
  }

  private _findNotification(id: number) {
    for (let i = 0; i < this.notifications.length; i++) {
      if (this.notifications[i].id === id) {
        return {index: i, active: this.notifications[i]};
      }
    }

    return null;
  }

  private _applyConfig(override: NotificationInterface = {}) {
    const current: NotificationInterface = {...this.config};
    current.closeButton = this._use(override, override.closeButton, current.closeButton);
    current.positionClass = this._use(override, override.positionClass, current.positionClass);
    current.titleClass = this._use(override, override.titleClass, current.titleClass);
    current.messageClass = this._use(override, override.messageClass, current.messageClass);
    return current;
  }

  private _use<T>(config, source: T, defaultValue: T): T {
    return config && source !== undefined ? source : defaultValue;
  }

}
