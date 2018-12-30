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

import { LayoutComponent } from './layout/layout.component';
import { BrandModule } from '../admin';
import { NavigationModule } from '../component/navigation';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [
    NgxDatatableModule,
    NgxChartsModule,
    SharedModule,
    ApmRoutingModule,
    SearchModule,
    BrandModule,
    NavigationModule
  ],
  declarations: [
    ErrorComponent,
    PerformanceComponent,
    DetailComponent,
    ViewComponent,
    LayoutComponent
  ],
  providers: [NavigationService, PerformanceService]
})
export class ApmModule {}
