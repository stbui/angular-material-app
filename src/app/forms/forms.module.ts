import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }  from '@angular/forms';
import { RoutingModule } from './forms-routing.module';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  declarations: [
    ElementsComponent,
    ValidationComponent,
    CkeditorComponent
  ]
})
export class FormModule { }
