import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-day-button',
  templateUrl: './day-button.component.html',
  styleUrls: ['./day-button.component.scss']
})
export class DayButtonComponent {

  @Input() date: any;
  @Output() onSelected = new EventEmitter();
  @Input()
  get selected() {
    return this.isNow();
  }


  constructor() {
  }

  isNow() {
    const now = new Date();
    return this.date && this.date.getFullYear() === now.getFullYear() && this.date.getMonth() === now.getMonth() && this.date.getDate() === now.getDate();
  }

  onSelectedTriggered(day) {
    this.onSelected.emit(day);
  }
}
