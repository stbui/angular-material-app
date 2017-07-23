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

  ngOnInit() {
    
  }

  setCellWidth(column) {
    return column.width;
  }

  cellClasses(column) {
    return {
      'stbui-table-hidden': !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
    }
  }
}
