import { Component, Input, Output, ElementRef, ViewChild } from '@angular/core';

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
  @Input() styleObject;
  @Input() objData;

  // 是否显示间隔斑马纹
  @Input() stripe: boolean = false;
  // 是否显示纵向边框
  @Input() border: boolean = false;
  // 禁用鼠标悬停时的高亮
  @Input() disabledHover: boolean = true;

  @ViewChild('tbody') tbody: ElementRef;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  setCellWidth(column) {
    return column.width;
  }

  cellClasses(column) {
    return {
      'stbui-table-hidden': !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
    }
  }

  rowClasses(_index) {
    return {
      'stbui-row-hover': false
    }
  }

  handleMouseIn(_index) {
    // if (this.objData[_index]._isHover) return;
    // this.objData[_index]._isHover = true;
  }

  handleMouseOut() {

  }

  clickCurrentRow() {

  }

  dblclickCurrentRow() {

  }
}
