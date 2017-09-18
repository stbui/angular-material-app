import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarHelpComponent } from './toolbar-help/toolbar-help.component';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { ToolbarNotificationService } from './toolbar-notification/toolbar-notification.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  imports: [
    SharedModule,
    PerfectScrollbarModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    ToolbarUserComponent,
    ToolbarHelpComponent,
    ToolbarNotificationComponent
  ],
  providers: [
    {provide: 'toolbarNotificationService', useClass: ToolbarNotificationService}
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
