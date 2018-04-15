import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToolbarNotificationModel } from './toolbar-notification.model';

@Injectable()
export class ToolbarNotificationService {
  notifications: ToolbarNotificationModel[];

  constructor(private http: HttpClient) {
    this.notifications = [
      {
        id: '1',
        title: 'angular 6 版本更新记录',
        lastTime: '23 分钟之前',
        state: '1'
      },
      {
        id: '2',
        title: 'vue 热度持续上升',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: '3',
        title: 'react 16 发布',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: '4',
        title: '2018 前端发展趋势',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: '5',
        title: '框架搭建完成',
        lastTime: '23 分钟之前',
        state: 'state'
      }
    ];
  }

  select() {
    return this.notifications;
  }

  delete(notification) {
    const i = this.notifications.indexOf(notification);
    this.notifications = [
      ...this.notifications.slice(0, i),
      ...this.notifications.slice(i + 1)
    ];

    return this.notifications;
  }
}
