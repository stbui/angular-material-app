import { Component, ElementRef, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'stbui-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent {
  cssPrefix = 'toolbar-notification';
  isOpen: boolean = false;
  notifications = [];

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  constructor(
    private _elementRef: ElementRef,
    @Inject('toolbarNotificationService') private service
  ) {
    this.select();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  select() {
    this.notifications = this.service.select();
  }

  delete(event, notification) {
    event.stopPropagation();

    this.notifications = this.service.delete(notification);
  }
}
