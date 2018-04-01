/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { NotificationConfig, STBUI_NOTIFICATION_DATA } from './notification.config';
import { NotificationRef } from './notification.ref';

@Component({
  moduleId: module.id,
  selector: 'stbui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {

  data: { message: string, title: string };

  constructor(
    public notificationRef: NotificationRef<NotificationComponent>,
    @Inject(STBUI_NOTIFICATION_DATA) data: any
  ) {
    this.data = data;
  }
}
