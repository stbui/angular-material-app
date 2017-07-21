import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'stbui-table-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() columns;
  @Input() data;
  @Input() columnsWidth;

  @Input() fixed;

  // 是否显示间隔斑马纹
  @Input() stripe: boolean = false;
  // 是否显示纵向边框
  @Input() border: boolean = false;
  // 禁用鼠标悬停时的高亮
  @Input() disabledHover: boolean = true;

  constructor() {

  }

  setCellWidth(column) {
    return column.width;
  }
}
