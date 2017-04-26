import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './componebt-routing.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarComponent } from './date-picker/calendar/calendar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ComponentComponent } from './component.component';
import { AmapComponent } from './amap/amap.component';
import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RoutingModule
  ],
  declarations: [
    DatePickerComponent,
    CalendarComponent,
    PaginationComponent,
    ComponentComponent,
    AmapComponent,
    MarkdownComponent
  ],
  exports: [
    DatePickerComponent,
    PaginationComponent,
    AmapComponent,
    MarkdownComponent
  ]
})
export class ComponentModule { }
