import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';
import { RoutingModule } from './tables.routes';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    RoutingModule
  ],
  declarations: [
    StaticComponent,
    DatatableComponent
  ]
})
export class TablesModule { }
