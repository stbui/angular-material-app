import { NotificationInterface } from './notification.interface';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { NotificationRef } from './notification.ref';

export class NotificationConfig {
  private _onTap: Subject<any> = new Subject();
  private _onAction: Subject<any> = new Subject();

  constructor(public id: number,
              public config: NotificationInterface,
              public message: string | null | undefined,
              public title: string | undefined,
              public type: string,
              public notificationRef: NotificationRef<any>) {

  }

  triggerTap() {
    this._onTap.next();
    this._onTap.complete();
  }

  onTap(): Observable<any> {
    return this._onTap.asObservable();
  }

  triggerAction(action?: any) {
    this._onAction.next(action);
    this._onAction.complete();
  }

  onAction(): Observable<any> {
    return this._onAction.asObservable();
  }
}



