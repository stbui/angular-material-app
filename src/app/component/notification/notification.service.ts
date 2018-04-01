/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  ComponentRef,
  Injectable,
  Injector,
  Inject,
  Optional,
  SkipSelf,
  InjectionToken,
  TemplateRef,
  EmbeddedViewRef
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';

import { NotificationRef } from './notification.ref';
import { STBUI_NOTIFICATION_DATA, NotificationConfig } from './notification.config';
import { NotificationComponent } from './notification.component';
import { NotificationContainer } from './notification-container';
import { NotificationInterface } from './notification.interface';
import { NotificationInjector } from './notification.injector';

export const STBUI_NOTIFICATION_DEFAULT_OPTIONS = new InjectionToken<NotificationConfig>('notification-default-options');


@Injectable()
export class NotificationService {

  constructor(
    private _injector: Injector,
    private _overlay: Overlay,
    @Optional() @SkipSelf() private _parentNotication: NotificationService,
    @Inject(STBUI_NOTIFICATION_DEFAULT_OPTIONS) private _defaultConfig: NotificationConfig) {
  }

  open(message: string, title: string, config?: NotificationConfig): NotificationRef<NotificationComponent> {
    const _config = {...this._defaultConfig, ...config};
    _config.data = {message, title};
    return this.openFromComponent(NotificationComponent, _config);
  }

  openFromComponent<T>(component: ComponentType<T>, config?: NotificationConfig): NotificationRef<T> {
    return this._attach(component, config) as NotificationRef<T>;
  }

  private _attchNotificationContainer(overlayRef: OverlayRef, config: NotificationConfig): NotificationContainer {
    const containerPortal = new ComponentPortal(NotificationContainer, config.viewContainerRef);
    const containerRef: ComponentRef<NotificationContainer> = overlayRef.attach(containerPortal);
    containerRef.instance.notificationConfig = config;
    return containerRef.instance;
  }

  private _attach<T>(content: ComponentType<T> | TemplateRef<T>, userConfig?: NotificationConfig):
    NotificationRef<T | EmbeddedViewRef<any>> {

    const config = {...this._defaultConfig, ...userConfig};
    const overlayRef = this._createOverlay(config);
    const container = this._attchNotificationContainer(overlayRef, config);
    const notificationRef = new NotificationRef<T | EmbeddedViewRef<any>>(container, overlayRef);

    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null!, {
        $implicit: config.data,
        notificationRef
      } as any);

      notificationRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, notificationRef);
      const portal = new ComponentPortal(content, undefined, injector);
      const contentRef = container.attachComponentPortal<T>(portal);
      notificationRef.instance = contentRef.instance;
    }

    return notificationRef;
  }

  private _animateNotification(notificationRef: NotificationRef<any>, config: NotificationConfig) {
    if(config.duration && config.duration > 0) {

    }
  }

  private _createOverlay(config: NotificationConfig): OverlayRef {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;

    let positionStrategy = this._overlay.position().global();
    const isRtl = config.direction === 'rtl';
    const isLeft = (
      config.horizontalPosition === 'left' ||
      (config.horizontalPosition === 'start' && !isRtl) ||
      (config.horizontalPosition === 'end' && isRtl));
    const isRight = !isLeft && config.horizontalPosition !== 'center';
    if (isLeft) {
      positionStrategy.left('0');
    } else if (isRight) {
      positionStrategy.right('0');
    } else {
      positionStrategy.centerHorizontally();
    }
    if (config.verticalPosition === 'top') {
      positionStrategy.top('0');
    } else {
      positionStrategy.bottom('0');
    }

    overlayConfig.positionStrategy = positionStrategy;

    return this._overlay.create(overlayConfig);
  }

  private _createInjector<T>(config: NotificationConfig, notificationRef): PortalInjector {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injectionTokens = new WeakMap();

    injectionTokens.set(NotificationRef, notificationRef);
    injectionTokens.set(STBUI_NOTIFICATION_DATA, config.data);

    return new PortalInjector(userInjector || this._injector, injectionTokens);
  }

}
