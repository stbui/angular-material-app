import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables.routing';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableService } from './datatable/datatable.service';
import { ComponentModule } from '../component/component.module';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule,
    NgxDatatableModule,
    ComponentModule
  ],
  declarations: [
    TablesComponent,
    StaticComponent,
    DatatableComponent,
    DynamicComponent
  ],
  providers: [
    { provide: 'dataTableService', useClass: DataTableService }
  ]
})
export class TablesModule { }
