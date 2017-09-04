import { Component, OnDestroy, HostListener } from '@angular/core';
import { NotificationInterface } from './notification.interface';
import { NotificationModel } from './notification.model';

@Component({
  selector: 'stbui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy {

  message?: string | null;
  title?: string;
  options;

  @HostListener('click')
  onClick() {

  }

  @HostListener('mouseenter')
  onMouseenter() {

  }

  @HostListener('mouseleave')
  onMouseLeave() {

  }

  constructor(
    public notifications: NotificationModel
  ) {
    this.message = this.notifications.message;
    this.title = this.notifications.title;
  }

  ngOnDestroy() {

  }

  activate() {

  }

  updateProgress() {

  }

  remove() {

  }

}
