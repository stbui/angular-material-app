import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

import { SharedModule } from '../../@stbui/shared';
import { CoreModule } from '../../@stbui/core';

import { SearchModule } from '../component/search';
import { LayoutModule } from '../layouts';
import {
  BrandModule,
  ToolbarUserModule,
  ToolbarNotificationModule
} from '../../@stbui/admin';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MailService } from './mail.service';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule,
    SharedModule,
    CoreModule,
    SearchModule,
    LayoutModule,
    MailRoutingModule,
    BrandModule,
    ToolbarUserModule,
    ToolbarNotificationModule
  ],
  entryComponents: [ComposeComponent],
  declarations: [
    MailComponent,
    ComposeComponent,
    DetailComponent,
    ListComponent,
    ToolbarComponent
  ],
  providers: [{ provide: 'mailService', useClass: MailService }]
})
export class MailModule { }
