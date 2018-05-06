/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

 import {
  Injectable,
  ComponentRef,
  TemplateRef,
  Injector,
  EmbeddedViewRef,
  Optional,
  SkipSelf
} from '@angular/core';
import {
  ComponentPortal,
  ComponentType,
  PortalInjector,
  TemplatePortal
} from '@angular/cdk/portal';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';

import { ChatWidgetConfig, STBUI_CHATWIDGET_DATA } from './chat-widget.config';
import { ChatWidgetContainer } from './chat-widget-container';
import { ChatWidgetComponent } from './chat-widget.component';
import { ChatWidgetRef } from './chat-widget.ref';

@Injectable()
export class ChatWidgetService {
  private _chatWidgetRefAtThisLevel: ChatWidgetRef<any> | null = null;

  get _openedChatWidgetRef(): ChatWidgetRef<any> | null {
    const parent = this._parentChatWidget;
    return parent
      ? parent._openedChatWidgetRef
      : this._chatWidgetRefAtThisLevel;
  }

  set _openedChatWidgetRef(value: ChatWidgetRef<any> | null) {
    if (this._parentChatWidget) {
      this._parentChatWidget._openedChatWidgetRef = value;
    } else {
      this._chatWidgetRefAtThisLevel = value;
    }
  }

  constructor(
    private overlay: Overlay,
    private injector: Injector,
    @Optional()
    @SkipSelf()
    private _parentChatWidget: ChatWidgetService
  ) {}

  open(config?: ChatWidgetConfig) {
    this._attach(ChatWidgetComponent, config);
  }

  dismiss(): void {
    if (this._openedChatWidgetRef) {
      this._openedChatWidgetRef.dismiss();
    }
  }

  private _attach<T>(
    content: ComponentType<T> | TemplateRef<T>,
    userConfig?: ChatWidgetConfig
  ): ChatWidgetRef<T | EmbeddedViewRef<any>> {
    const config = { ...new ChatWidgetConfig(), ...userConfig };
    const overlayRef = this._createOverlay(config);
    const container = this._attachContainer(overlayRef, config);
    const chatWidgetRef = new ChatWidgetRef<T | EmbeddedViewRef<any>>(
      container,
      overlayRef
    );

    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null!, {
        $implicit: config.data,
        chatWidgetRef
      } as any);

      chatWidgetRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, chatWidgetRef);
      const portal = new ComponentPortal(content, undefined, injector);
      const contentRef = container.attachComponentPortal<T>(portal);
      chatWidgetRef.instance = contentRef.instance;
    }

    chatWidgetRef.afterDismissed().subscribe(() => {
      if (this._openedChatWidgetRef == chatWidgetRef) {
        this._openedChatWidgetRef = null;
      }
    });

    if (this._openedChatWidgetRef) {
      this._openedChatWidgetRef
        .afterDismissed()
        .subscribe(() => chatWidgetRef.containerInstance.enter());
      this._openedChatWidgetRef.dismiss();
    } else {
      chatWidgetRef.containerInstance.enter();
    }

    this._openedChatWidgetRef = chatWidgetRef;
    return chatWidgetRef;
  }

  private _attachContainer(overlayRef: OverlayRef, config: ChatWidgetConfig) {
    const containerPortal = new ComponentPortal(
      ChatWidgetContainer,
      config.viewContainerRef
    );
    const containerRef: ComponentRef<ChatWidgetContainer> = overlayRef.attach(
      containerPortal
    );

    return containerRef.instance;
  }

  private _createOverlay(config: ChatWidgetConfig): OverlayRef {
    const overlayConfig = new OverlayConfig({
      direction: config.direction,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay
        .position()
        .global()
        .right()
        .bottom()
    });

    return this.overlay.create(overlayConfig);
  }

  private _createInjector<T>(
    config: ChatWidgetConfig,
    notificationRef
  ): PortalInjector {
    const userInjector =
      config && config.viewContainerRef && config.viewContainerRef.injector;
    const injectionTokens = new WeakMap();

    injectionTokens.set(notificationRef, notificationRef);
    injectionTokens.set(STBUI_CHATWIDGET_DATA, config.data);

    return new PortalInjector(userInjector || this.injector, injectionTokens);
  }
}
