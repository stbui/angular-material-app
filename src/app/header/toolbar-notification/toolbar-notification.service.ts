import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ToolbarNotificationModel } from './toolbar-notification.model';

@Injectable()
export class ToolbarNotificationService {

  notifications: ToolbarNotificationModel[];

  constructor(private http: Http) {
    this.notifications = [
      {
        id: 'id',
        title: '计划升级到angular 5',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: 'id',
        title: '0.4.5 版本更新记录',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: 'id',
        title: '优化项目结构',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: 'id',
        title: '添加base框架分支',
        lastTime: '23 分钟之前',
        state: 'state'
      },
      {
        id: 'id',
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

  }

  update() {

  }

}
