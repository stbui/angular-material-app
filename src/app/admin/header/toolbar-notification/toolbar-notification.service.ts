import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ToolbarNotificationModel } from './toolbar-notification.model';

@Injectable()
export class ToolbarNotificationService {

  notifications: ToolbarNotificationModel[];

  constructor(private http: Http) {
    this.notifications = [
      // {
      //   id: 'id',
      //   title: 'apm',
      //   lastTime: '23 分钟之前',
      //   state: 'state'
      // }
    ];
  }

  select() {
    return this.notifications;
  }

  delete(notification) {

  }

  update() {

  }

}
