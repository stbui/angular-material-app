import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';
import { STBUI_NOTIFICATION_DATA } from './notification.token';

@NgModule({
  imports: [CommonModule],
  exports: [NotificationComponent],
  declarations: [NotificationComponent],
  entryComponents: [NotificationComponent]
})
export class NotificaitonModule {

  constructor(@Optional() @SkipSelf() parentModule: NotificaitonModule) {
    if (parentModule) {
      throw new Error('NotificaitonModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }

  static forRoot(config?): ModuleWithProviders {
    return {
      ngModule: NotificaitonModule,
      providers: [
        { provide: STBUI_NOTIFICATION_DATA, useValue: config },
        OverlayContainer,
        Overlay,
        NotificationService,
      ]
    };
  }
}

export * from './notification.component';
export * from './notification.service';
export * from './notification.injector';
export * from './notification.ref';
export * from './notification.directive';

