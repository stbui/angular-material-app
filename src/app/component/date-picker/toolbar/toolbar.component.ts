import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-calendar-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() displayDates;
  @Output() monthChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  OnPrev() {
    this.monthChange.emit(-1);
  }

  OnNext() {
    this.monthChange.emit(1);
  }
}
