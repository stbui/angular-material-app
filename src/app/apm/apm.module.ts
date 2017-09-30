import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ApmRoutingModule } from './apm-routing.module';
import { ErrorComponent } from './error/error.component';
import { PerformanceComponent } from './performance/performance.component';
import { SearchModule } from '../component/search';
import { DetailComponent } from './error/detail/detail.component';
import { ViewComponent } from './performance/view/view.component'

@NgModule({
  imports: [
    SharedModule,
    ApmRoutingModule,
    SearchModule
  ],
  declarations: [ErrorComponent, PerformanceComponent, DetailComponent, ViewComponent]
})
export class ApmModule { }
