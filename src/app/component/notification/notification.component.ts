import { Component, OnDestroy } from '@angular/core';
import { NotificationConfig } from './notification.config';
import { NotificationService } from './notification.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'stbui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy {

  message?: string | null;
  title?: string;
  config?;
  notificationClasses = '';

  private timeout: any;
  private activate$: Subscription;
  private remove$: Subscription;

  constructor(protected _noticationService: NotificationService,
              public _notificationConfig: NotificationConfig) {

    this.message = _notificationConfig.message;
    this.title = _notificationConfig.title;
    this.config = _notificationConfig.config;
    this.notificationClasses = `${_notificationConfig.type} ${_notificationConfig.config.notificationClass}`;

    this.activate$ = _notificationConfig.notificationRef.afterActivate().subscribe(() => {
      this.activate();
    });
    this.remove$ = _notificationConfig.notificationRef.manualClosed().subscribe(() => {
      this.remove();
    });
  }

  ngOnDestroy() {
    this.activate$.unsubscribe();
    this.remove$.unsubscribe();
    clearTimeout(this.timeout);
  }

  activate() {
    this.timeout = setTimeout(() => {
      this.remove();
    }, 2500);
  }

  remove() {
    this._noticationService.remove(this._notificationConfig.id);
  }

}
