import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuillModule } from 'ngx-quill';
import { SearchModule } from '../component/search';

import { MailComponent } from './mail.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MailService } from './mail.service';
import { MailRoutingModule } from './mail.routing';

@NgModule({
  imports: [
    SharedModule,
    MailRoutingModule,
    QuillModule,
    SearchModule
  ],
  entryComponents: [
    ComposeComponent
  ],
  declarations: [
    MailComponent,
    ComposeComponent,
    DetailComponent,
    ListComponent,
    ToolbarComponent
  ],
  providers: [
    { provide: 'mailService', useClass: MailService }
  ]
})
export class MailModule {
}
