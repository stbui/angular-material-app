import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';
import { WidgetModule } from '../../component/widget';

import { PerformanceComponent } from './performance.component';
import { PerformanceService } from './performance.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxChartsModule,
    SharedModule,
    SearchModule,
    WidgetModule
  ],
  declarations: [PerformanceComponent, DetailComponent],
  providers: [PerformanceService]
})
export class PerformanceModule {}
