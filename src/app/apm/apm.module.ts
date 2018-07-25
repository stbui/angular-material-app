import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../component/search';

import { ApmRoutingModule } from './apm-routing.module';
import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './error/detail/detail.component';
import { PerformanceComponent } from './performance/performance.component';
import { ViewComponent } from './performance/view/view.component';
import { PerformanceService } from './performance/performance.service';

@NgModule({
  imports: [
    NgxDatatableModule,
    NgxChartsModule,
    SharedModule,
    ApmRoutingModule,
    SearchModule
  ],
  declarations: [
    ErrorComponent,
    PerformanceComponent,
    DetailComponent,
    ViewComponent
  ],
  providers: [PerformanceService]
})
export class ApmModule {}
