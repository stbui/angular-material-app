import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './componebt-routing.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarComponent } from './date-picker/calendar/calendar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ComponentComponent } from './component.component';
import { AmapComponent } from './amap/amap.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule
  ],
  declarations: [
    DatePickerComponent,
    CalendarComponent,
    PaginationComponent,
    ComponentComponent,
    AmapComponent
  ],
  exports: [
    DatePickerComponent,
    PaginationComponent,
    AmapComponent
  ]
})
export class ComponentModule { }
