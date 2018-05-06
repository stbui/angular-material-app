/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

 import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import {AnimationEvent} from '@angular/animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  TemplatePortal,
  CdkPortalOutlet
} from '@angular/cdk/portal';
import { ChatWidgetAnimations } from './chat-widget.animation';

@Component({
  moduleId: module.id,
  selector: 'stbui-chat-widget-container',
  templateUrl: 'chat-widget-container.html',
  styleUrls: ['chat-widget-container.scss'],
  animations: [ChatWidgetAnimations.chatWidgetState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'stbbui-chat-widget-container',
    '[@state]': '_animationState',
    '(@state.start)': '_onAnimationStart($event)',
    '(@state.done)': '_onAnimationDone($event)'
  }
})
export class ChatWidgetContainer extends BasePortalOutlet implements OnDestroy {
  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;
  _animationStateChanged = new EventEmitter<AnimationEvent>();

  _animationState: 'void' | 'visible' | 'hidden' = 'void';
  private _destroyed: boolean;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnDestroy() {
    this._destroyed = true;
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  enter(): void {
    if (!this._destroyed) {
      this._animationState = 'visible';
      this.changeDetectorRef.detectChanges();
    }
  }

  exit(): void {
    if (!this._destroyed) {
      this._animationState = 'hidden';
      this.changeDetectorRef.markForCheck();
    }
  }

  _onAnimationStart(event: AnimationEvent) {
    this._animationStateChanged.emit(event);
  }
  _onAnimationDone(event: AnimationEvent) {
    this._animationStateChanged.emit(event);
  }
}
