import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../shared/material.module'
import { ScrollbarModule } from '../../shared/scrollbar/scrollbar.module'

import { ToolbarNotificationComponent } from './toolbar-notification.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ScrollbarModule
  ],
  declarations: [ToolbarNotificationComponent],
  exports: [ToolbarNotificationComponent]
})
export class ToolbarNotificationModule { }
