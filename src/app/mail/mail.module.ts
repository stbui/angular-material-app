import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { MailComponent } from './mail.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MailService } from './mail.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    QuillModule
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
