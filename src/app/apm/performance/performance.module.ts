import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../../component/search';

import { PerformanceComponent } from './performance.component';
import { PerformanceService } from './performance.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, SearchModule],
  declarations: [PerformanceComponent, ViewComponent],
  providers: [PerformanceService]
})
export class PerformanceModule {}
