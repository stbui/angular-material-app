/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  NgZone,
  OnDestroy,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  CdkPortalOutlet,
  TemplatePortal
} from '@angular/cdk/portal';
import { take } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { NotificationConfig } from './notification.config';
import { NotificationAnimations } from './notification.animation';

@Component({
  moduleId: module.id,
  selector: 'notification-container',
  templateUrl: 'notification-container.html',
  styleUrls: ['notification-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [NotificationAnimations.notificationState],
  host: {
    class: 'notification-container',
    '[@state]': '_animationState',
    '(@state.done)': 'onAnimationEnd($event)'
  }
})
export class NotificationContainer extends BasePortalOutlet
  implements OnDestroy {
  private _destroyed = false;

  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;

  readonly _onExit: Subject<any> = new Subject();
  readonly _onEnter: Subject<any> = new Subject();

  _animationState = 'void';
  notificationConfig: NotificationConfig;

  constructor(
    private _ngZone: NgZone,
    private _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  onAnimationEnd(event: AnimationEvent) {
    const { fromState, toState } = event;

    if (
      (toState === 'void' && fromState !== 'void') ||
      toState.startsWith('hidden')
    ) {
      this._completeExit();
    }

    if (toState.startsWith('visible')) {
      const onEnter = this._onEnter;

      this._ngZone.run(() => {
        onEnter.next();
        onEnter.complete();
      });
    }
  }

  enter(): void {
    if (!this._destroyed) {
      this._animationState = `visible-${
        this.notificationConfig.verticalPosition
      }`;
      this._changeDetectorRef.detectChanges();
    }
  }

  exit(): Observable<void> {
    this._animationState = `hidden-${this.notificationConfig.verticalPosition}`;
    return this._onExit;
  }

  ngOnDestroy() {
    this._destroyed = true;
    this._completeExit();
  }

  private _completeExit() {
    this._ngZone.onMicrotaskEmpty
      .asObservable()
      .pipe(take(1))
      .subscribe(() => {
        this._onExit.next();
        this._onExit.complete();
      });
  }

  private _assertNotAttached() {
    if (this._portalOutlet.hasAttached()) {
      throw Error('已存在');
    }
  }
}
