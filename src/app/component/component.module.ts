import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ComponentComponent } from './component.component';

import { MarkdownComponent } from './markdown/markdown.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './popover/popover.directive';
import { SearchComponent } from './search/search.component';

import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule
  ],
  declarations: [
    PaginationComponent,
    ComponentComponent,
    MarkdownComponent,
    PopoverComponent,
    PopoverDirective,
    SearchComponent,
    TableComponent,
  ],
  exports: [
    PaginationComponent,
    MarkdownComponent,
    PopoverComponent,
    PopoverDirective,
    SearchComponent,
    TableComponent
  ]
})
export class ComponentModule {
}
