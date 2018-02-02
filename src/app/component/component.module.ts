import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../shared/material.module';

import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './popover/popover.directive';

import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule
  ],
  declarations: [
    PopoverComponent,
    PopoverDirective,
    TableComponent,
  ],
  exports: [
    PopoverComponent,
    PopoverDirective,
    TableComponent
  ]
})
export class ComponentModule {
}
