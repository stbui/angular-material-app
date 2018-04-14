import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { QuillModule } from 'ngx-quill';

import { FormsRoutingModule } from './forms.routing';
import { FormsComponent } from './forms.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [SharedModule, QuillModule, FormsRoutingModule, ReactiveFormsModule],
  declarations: [
    FormsComponent,
    ElementsComponent,
    ValidationComponent,
    EditorComponent
  ]
})
export class FormModule {}
