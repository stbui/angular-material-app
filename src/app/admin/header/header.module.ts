import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarHelpComponent } from './toolbar-help/toolbar-help.component';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { ToolbarNotificationService } from './toolbar-notification/toolbar-notification.service';
import { LoadingModule } from '../../component/loading';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    PerfectScrollbarModule,
    LoadingModule
  ],
  declarations: [
    HeaderComponent,
    ToolbarUserComponent,
    ToolbarHelpComponent,
    ToolbarNotificationComponent
  ],
  providers: [
    {provide: 'toolbarNotificationService', useClass: ToolbarNotificationService},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
