import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'stbui-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})

export class ToolbarNotificationComponent {

  cssPrefix = 'toolbar-notification';
  isOpen: boolean = false;
  notifications = [];

  public config: PerfectScrollbarConfigInterface = {suppressScrollX: true};
  @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

  @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  constructor(private _elementRef: ElementRef, @Inject('toolbarNotificationService') private service) {
    this.select();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  select() {
    this.notifications = this.service.select();
  }

  delete(notification) {
    let i = this.notifications.indexOf(notification);
    this.notifications = [
      ...this.notifications.slice(0, i),
      ...this.notifications.slice(i + 1)
    ];
    this.service.delete(notification);
  }

}
