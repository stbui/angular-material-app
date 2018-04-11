/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { STBUI_NOTIFICATION_DATA } from './notification.config';
import { NotificationRef } from './notification.ref';
import { NotificationAnimations } from './notification.animation';

@Component({
  moduleId: module.id,
  selector: 'stbui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [NotificationAnimations.contentFade],
  host: {
    '[@contentFade]': '',
  }
})
export class NotificationComponent {

  data: { message: string, title: string, type: string };

  constructor(
    public notificationRef: NotificationRef<NotificationComponent>,
    @Inject(STBUI_NOTIFICATION_DATA) data: any
  ) {
    this.data = data;
  }

  action() {
    this.notificationRef.dismissWithAction();
  }
}
