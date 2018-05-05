/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ChatWidgetContainer } from './chat-widget-container';

export class ChatWidgetRef<T = any, R = any> {
  instance: T;

  containerInstance: ChatWidgetContainer;

  private readonly _afterDismissed = new Subject<R | undefined>();
  private readonly _afterOpened = new Subject<void>();
  private _result: R | undefined;

  constructor(
    containerInstance: ChatWidgetContainer,
    private _overlayRef: OverlayRef
  ) {
    this.containerInstance = containerInstance;

    containerInstance._animationStateChanged
      .pipe(
        filter(
          event => event.phaseName === 'done' && event.toState === 'visible'
        ),
        take(1)
      )
      .subscribe(() => {
        this._afterOpened.next();
        this._afterOpened.complete();
      });

    containerInstance._animationStateChanged
      .pipe(
        filter(
          event => event.phaseName === 'done' && event.toState === 'hidden'
        ),
        take(1)
      )
      .subscribe(() => {
        this._overlayRef.dispose();
        this._afterDismissed.next(this._result);
        this._afterDismissed.complete();
      });
  }

  dismiss(result?: R): void {
    console.log('close');
    if (!this._afterDismissed.closed) {
      this.containerInstance._animationStateChanged.pipe(
        filter(event => event.phaseName === 'start'),
        take(1)
      ).subscribe(() => this._overlayRef.detachBackdrop());

      this._result = result;
      this.containerInstance.exit();
    }
  }

  afterDismissed(): Observable<R | undefined> {
    return this._afterDismissed.asObservable();
  }

  afterOpend(): Observable<void> {
    return this._afterOpened.asObservable();
  }

  backdropClick(): Observable<MouseEvent> {
    return this._overlayRef.backdropClick();
  }
}
