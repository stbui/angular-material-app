import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'stbui-table-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {

  @Input() columns;
  @Input() data;
  @Input() columnsWidth;

  @Input() fixed;
  @Input() styleObject;

  constructor() {
  }

  setCellWidth(column) {
    return column.width;
  }
}
