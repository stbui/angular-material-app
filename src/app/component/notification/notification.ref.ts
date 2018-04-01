/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


export class NotificationRef<T> {
  instance: T;

  containerInstance;

  private readonly _afterClosed = new Subject();
  private readonly _afterOpened = new Subject<void>();
  private readonly _onAction = new Subject<void>();

  private _durationTimeroutId: number;

  constructor(containerInstance, private _overlayRef: OverlayRef) {
    this.containerInstance = containerInstance;
  }

  close(): void {

  }

  _open(): void {

  }

  afterClosed() {
  }

  afterOpened() {
  }

}
