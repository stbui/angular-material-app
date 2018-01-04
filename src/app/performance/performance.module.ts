import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';

@NgModule({
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ],
  declarations: [PerformanceComponent]
})
export class PerformanceModule { }
