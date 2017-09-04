import { Component, OnDestroy, HostListener, ComponentRef } from '@angular/core';
import { NotificationConfig } from './notification.config';
import { NotificationService } from './notification.service';
import { ComponentPortal, PortalHostDirective } from '@angular/cdk/portal';

@Component({
  selector: 'stbui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy {

  message?: string | null;
  title?: string;

  @HostListener('click')
  onClick() {

  }

  @HostListener('mouseenter')
  onMouseenter() {

  }

  @HostListener('mouseleave')
  onMouseLeave() {

  }

  constructor(protected _noticationService: NotificationService,
              public _notificationConfig: NotificationConfig) {
    this.message = _notificationConfig.message;
    this.title = _notificationConfig.title;
  }

  ngOnDestroy() {

  }

  activate() {

  }

  updateProgress() {

  }

  remove() {
    this._noticationService.remove(this._notificationConfig.id);
  }

}
