import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class NotificationRef<T> {
  componentInstance: T;

  private _afterClosed: Subject<any> = new Subject();
  private _activate: Subject<any> = new Subject();
  private _manualClose: Subject<any> = new Subject();

  constructor(private _overlayRef: OverlayRef) {
  }

  manualClose() {
    this._manualClose.next();
    this._manualClose.complete();
  }

  manualClosed(): Observable<any> {
    return this._manualClose.asObservable();
  }

  close(): void {
    this._overlayRef.dispose();
    this._afterClosed.next();
    this._afterClosed.complete();
  }

  afterClosed(): Observable<any> {
    return this._afterClosed.asObservable();
  }

  isInactive() {
    return this._activate.isStopped;
  }

  activate() {
    this._activate.next();
    this._activate.complete();
  }

  afterActivate(): Observable<any> {
    return this._activate.asObservable();
  }
}
