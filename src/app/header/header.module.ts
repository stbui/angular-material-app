import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeaderComponent } from './header.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarHelpComponent } from './toolbar-help/toolbar-help.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    HeaderComponent,
    ToolbarUserComponent,
    ToolbarHelpComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
