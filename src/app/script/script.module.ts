import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ScriptRoutingModule } from './script-routing.module';
import { ScriptComponent } from './script.component';
import { SearchModule } from '../component/search/index';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    SharedModule,
    ScriptRoutingModule,
    NgxDatatableModule,
    SearchModule
  ],
  declarations: [ScriptComponent, DetailComponent]
})
export class ScriptModule { }
