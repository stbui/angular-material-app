import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { TableModule } from '../component';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables.routing';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicService } from './dynamic/dynamic.service';

@NgModule({
  imports: [SharedModule, HttpClientModule, TablesRoutingModule, TableModule],
  declarations: [
    TablesComponent,
    StaticComponent,
    DatatableComponent,
    DynamicComponent
  ],
  providers: [DynamicService]
})
export class TablesModule {}
