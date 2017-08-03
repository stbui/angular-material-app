import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { ChartComponent } from './chart.component';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { RadarComponent } from './radar/radar.component';
import { PieComponent } from './pie/pie.component';
import { PolarComponent } from './polar/polar.component';
import { ChartRoutingModule } from './chart.routing';

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
    ChartRoutingModule
  ],
  declarations: [
    ChartComponent,
    LineComponent,
    BarComponent,
    DoughnutComponent,
    RadarComponent,
    PieComponent,
    PolarComponent
  ]
})
export class ChartModule { }
