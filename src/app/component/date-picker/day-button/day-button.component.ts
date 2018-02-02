import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-day-button',
  templateUrl: './day-button.component.html',
  styleUrls: ['./day-button.component.scss']
})
export class DayButtonComponent {
  @Input()
  set value(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  @Input()
  set selected(value) {
    const state = this.coerceBooleanProperty(value);
    if (this._selected != state) {
      this._selected = state;
    }
  }
  get selected() {
    return this._selected;
  }

  @Input() disabled: boolean = false;
  @Output() selectValueChange: EventEmitter<any> = new EventEmitter<any>();

  private _value;
  private _selected: boolean = false;

  constructor() {}

  isNow(date) {
    const now = new Date();
    return (
      date &&
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    );
  }

  onSelectValueChange(day: Date) {
    this.selected = !this.selected;
    this.selectValueChange.emit({
      selected: this.selected,
      value: day
    });
  }

  coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
  }
}
