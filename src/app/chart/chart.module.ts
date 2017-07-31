import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { ChartComponent } from './chart.component';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { RadarComponent } from './radar/radar.component';
import { PieComponent } from './pie/pie.component';
import { PolarComponent } from './polar/polar.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule,
    FlexLayoutModule
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
