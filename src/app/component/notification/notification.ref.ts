/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { NotificationContainer } from './notification-container';

export interface NotificationDismiss {
  dismissedByAction: boolean;
}

export class NotificationRef<T> {
  instance: T;

  containerInstance: NotificationContainer;

  private readonly _afterDismissed = new Subject<NotificationDismiss>();
  private readonly _afterOpened = new Subject<void>();
  private readonly _onAction = new Subject<void>();

  private _durationTimeoutId: any;
  private _dismissedByAction = false;

  constructor(
    containerInstance: NotificationContainer,
    private _overlayRef: OverlayRef
  ) {
    this.containerInstance = containerInstance;
    this.onAction().subscribe(() => this.dismiss());
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }

  dismiss(): void {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }

  dismissWithAction(): void {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
    }
  }

  closeWithAction(): void {
    this.dismissWithAction();
  }

  _dismissAfter(duration: number): void {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), duration);
  }

  _open(): void {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }

  private _finishDismiss(): void {
    this._overlayRef.dispose();

    if (!this._onAction.closed) {
      this._onAction.complete();
    }

    this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }

  afterDismissed(): Observable<NotificationDismiss> {
    return this._afterDismissed.asObservable();
  }

  afterOpened(): Observable<void> {
    return this.containerInstance._onEnter;
  }

  onAction(): Observable<void> {
    return this._onAction.asObservable();
  }
}
