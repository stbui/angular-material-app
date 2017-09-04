import { NgModule, ModuleWithProviders, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[notificationContainer]',
  exportAs: 'notificationContainer',
})
export class NotificationContainerDirective {
  constructor(private el: ElementRef) {
  }

  getContainerElement(): HTMLElement {
    return this.el.nativeElement;
  }
}

@NgModule({
  exports: [NotificationContainerDirective],
  declarations: [NotificationContainerDirective],
})
export class NotificationContainerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotificationContainerModule,
      providers: []
    };
  }
}
