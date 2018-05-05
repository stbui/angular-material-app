import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { QuillModule } from 'ngx-quill';
// import {
//   JsonSchemaFormModule,
//   MaterialDesignFrameworkModule
// } from 'angular2-json-schema-form';

import { FormsRoutingModule } from './forms.routing';
import { FormsComponent } from './forms.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';
// import { JsonSchemaFormComponent } from './json-schema-form/json-schema-form.component';

@NgModule({
  imports: [
    SharedModule,
    QuillModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    // MaterialDesignFrameworkModule,
    // JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule)
  ],
  declarations: [
    FormsComponent,
    ElementsComponent,
    ValidationComponent,
    EditorComponent,
    // JsonSchemaFormComponent
  ]
})
export class FormModule {}
