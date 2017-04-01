import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { MailComponent } from './mail.component';
import { ComposeComponent } from './compose/compose.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    QuillModule
  ],
  entryComponents: [
    ComposeComponent
  ],
  declarations: [MailComponent, ComposeComponent]
})
export class MailModule { }
