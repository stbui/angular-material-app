import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ToolbarUserModule } from '../toolbar-user/toolbar-user.module';
import { ToolbarNotificationModule } from '../toolbar-notification/toolbar-notification.module';
import { HeaderComponent } from './header.component';
import { LoadingModule } from '../../component/loading';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LoadingModule,
    ToolbarUserModule,
    ToolbarNotificationModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
