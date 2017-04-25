import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TablesComponent } from './tables.component';
import { DataTableModule } from 'angular2-datatable';
import { RoutingModule } from './tables-routing.module';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    DataTableModule,
    RoutingModule
  ],
  declarations: [
    TablesComponent,
    StaticComponent,
    DatatableComponent
  ]
})
export class TablesModule { }
