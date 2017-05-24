import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'stbui-calendar-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() displayDates;
  @Output() monthChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnPrev() {
    this.monthChange.emit(-1);
  }

  OnNext() {
    this.monthChange.emit(1);
  }

}
