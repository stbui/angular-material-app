import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../component/search/index';

import { ScriptRoutingModule } from './script-routing.module';
import { ScriptComponent } from './script.component';

import { DetailComponent } from './detail/detail.component';
import { ScriptService } from './script.service';
import { ScriptDirective } from './script.directive';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    ScriptRoutingModule,
    NgxDatatableModule,
    SearchModule
  ],
  declarations: [ScriptComponent, DetailComponent, ScriptDirective],
  providers: [ScriptService]
})
export class ScriptModule { }
