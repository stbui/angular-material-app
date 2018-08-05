/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { PopoverComponent } from './popover.component';

export class PopoverRef<T> {
  instance: T;
  containerInstance: PopoverComponent;

  private readonly _afterOpened = new Subject<void>();
  private readonly _afterClosed = new Subject<void>();
  private readonly _onAction = new Subject<void>();

  constructor(
    containerInstance: PopoverComponent,
    private _overlayRef: OverlayRef
  ) {
    this.containerInstance = containerInstance;
  }

  afterOpened(): Observable<void> {
    return this._afterOpened.asObservable();
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  onAction(): Observable<void> {
    return this._onAction.asObservable();
  }

  dismissWithAction(): void {
    this._afterClosed.next();
    this._afterClosed.complete();
  }

  backdropClick(): Observable<MouseEvent> {
    return this._overlayRef.backdropClick();
  }

  keydownEvents(): Observable<KeyboardEvent> {
    return this._overlayRef.keydownEvents();
  }
}
