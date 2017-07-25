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
  @Input() cellWidths;

  @Input() fixed;
  @Input() styleObject;
  @Input() objData;

  constructor() {

  }

  setCellWidth(cell) {
    return cell.width;
  }

  cellClasses(column) {
    return {
      'stbui-table-hidden': !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
    }
  }
}
