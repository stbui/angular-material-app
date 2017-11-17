import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../shared/material.module';

import { PaginationComponent } from './pagination/pagination.component';
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
    PaginationComponent,
    PopoverComponent,
    PopoverDirective,
    TableComponent,
  ],
  exports: [
    PaginationComponent,
    PopoverComponent,
    PopoverDirective,
    TableComponent
  ]
})
export class ComponentModule {
}
