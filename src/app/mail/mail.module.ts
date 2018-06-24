import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../component/search';
import { LayoutModule } from '../layouts';

import { MailRoutingModule } from './mail.routing';
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
    SearchModule,
    LayoutModule,
    MailRoutingModule
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
export class MailModule {}
