import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../../shared/material.module';
import { DatePickerComponent } from './date-picker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayButtonComponent } from './day-button/day-button.component';
import { DatePickerPipe } from './date-picker.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  declarations: [
    DatePickerComponent,
    CalendarComponent,
    DayButtonComponent,
    DatePickerPipe,
    ToolbarComponent,
    DateDisplayComponent,
    MonthComponent
  ],
  exports: [DatePickerComponent],
  entryComponents: [DatePickerComponent]
})
export class DatePickerModule {

  constructor(@Optional() @SkipSelf() parentModule: DatePickerModule) {
    if (parentModule) {
      throw new Error('DatePickerModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }
}
