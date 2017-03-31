import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { MailComponent } from './mail.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    QuillModule
  ],
  declarations: [MailComponent]
})
export class MailModule { }
