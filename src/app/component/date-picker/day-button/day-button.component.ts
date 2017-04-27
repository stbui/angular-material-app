import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'stbui-day-button',
  templateUrl: './day-button.component.html',
  styleUrls: ['./day-button.component.scss']
})
export class DayButtonComponent {

  @Input() selected: boolean = false;
  @Input() date: any;
  @Output() onSelected = new EventEmitter();

  constructor() {
  }

  isNow() {
    // const d = new Date(this.date);
    // console.log(d.getYear())
    //
    // const now = new Date();
    // return this.date && d.getYear() === now.getYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  }

  onSelectedTriggered(day) {
    this.onSelected.emit(day);
  }
}
