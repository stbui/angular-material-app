import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApmRoutingModule } from './apm-routing.module';
import { ErrorComponent } from './error/error.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  imports: [
    CommonModule,
    ApmRoutingModule
  ],
  declarations: [ErrorComponent, PerformanceComponent]
})
export class ApmModule { }
