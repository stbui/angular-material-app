import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import * as dateUtils from '../dateUtils';

@Component({
  selector: 'stbui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent {
  _currentlySelected = [];
  weekTexts;
  displayDates;
  selectedDate = new Date();
  slideType = 'next';
  displayMonthDay = true;

  private _mode;

  @Input()
  set mode(value) {
    this._mode = value == 'portrait' ? false : true;
  }
  get mode() {
    return this._mode;
  }

  @Output() onCancelDatePicker = new EventEmitter<any>();
  @Output() onConfirmDatePicker = new EventEmitter<any>();

  constructor() {
    const displayDate = dateUtils.cloneDate(new Date());
    this.displayDates = [displayDate];
  }

  isModeLandscape() {
    if (this.mode == 'landscape') {
      return this.mode;
    } else {
      return this.mode;
    }
  }

  toggleCurrentlySelected(day) {}

  onMonthChange(val) {
    const displayDate = dateUtils.addMonths(this.displayDates[0], val);
    this.changeDislayDate(displayDate);
  }

  changeDislayDate(date) {
    const oldDate = this.displayDates[0];
    if (
      date.getFullYear() === oldDate.getFullYear() &&
      date.getMonth() === oldDate.getMonth()
    ) {
      return;
    }

    const displayDate = dateUtils.cloneDate(date);
    displayDate.setDate(1);
    this.displayDates.push(displayDate);
    this.displayDates.splice(0, 1);
  }

  onSelectValueChange(event) {
    this.selectedDate = event;
    this.changeDislayDate(event);
  }

  onCancelDatePickerTriggered() {
    this.onCancelDatePicker.emit('取消');
  }

  onConfirmDatePickerTriggered() {
    this.onConfirmDatePicker.emit(this.selectedDate);
  }
}
