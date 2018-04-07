import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../shared/material.module';


import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule
  ],
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ]
})
export class ComponentModule {
}
