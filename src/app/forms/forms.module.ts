import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../../@stbui/shared/shared.module';

import { FormsRoutingModule } from './forms.routing';
import { FormsComponent } from './forms.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [SharedModule, FormsRoutingModule, ReactiveFormsModule, QuillModule.forRoot()],
  declarations: [
    FormsComponent,
    ElementsComponent,
    ValidationComponent,
    EditorComponent
  ]
})
export class FormModule { }
