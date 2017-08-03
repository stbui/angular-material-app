import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables.routing';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableService } from './datatable/datatable.service';
import { ComponentModule } from '../component/component.module';


@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule,
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
