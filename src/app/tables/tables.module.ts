import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCheckboxModule, MdButtonModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { TablesComponent } from './tables.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RoutingModule } from './tables-routing.module';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableService } from './datatable/datatable.service';
import { ComponentModule } from '../component/component.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule,
    FormsModule,
    NgxDatatableModule,
    RoutingModule,
    ComponentModule
  ],
  declarations: [
    TablesComponent,
    StaticComponent,
    DatatableComponent
  ],
  providers: [
    { provide: 'dataTableService', useClass: DataTableService }
  ]
})
export class TablesModule { }
