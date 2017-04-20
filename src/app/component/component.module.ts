import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '@angular/material';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarComponent } from './date-picker/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ButtonComponent,
    BadgeComponent,
    DialogComponent,
    DatePickerComponent,
    CalendarComponent
  ],
  exports: [
    DatePickerComponent
  ],
})
export class ComponentModule { }
