import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../component/search/index';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';

import { PerformanceService } from './performance.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    NgxDatatableModule,
    SearchModule,
    PerformanceRoutingModule
  ],
  declarations: [PerformanceComponent, ViewComponent],
  providers: [PerformanceService]
})
export class PerformanceModule { }
