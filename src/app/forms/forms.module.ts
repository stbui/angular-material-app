import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule }  from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { RoutingModule } from './forms.routes';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    RoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    ElementsComponent,
    ValidationComponent,
    CkeditorComponent
  ]
})
export class FormModule { }
