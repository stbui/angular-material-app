/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'stbui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data = [];
  // 表格列的配置描述
  @Input() columns = [];
  // 是否显示间隔斑马纹
  @Input() stripe: boolean = false;
  // 是否显示纵向边框
  @Input() border: boolean = false;
  // 是否显示表头
  @Input() showHeader: boolean = true;
  // 表格宽度，单位 px
  @Input() width: string | number;
  // 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
  @Input() height: string | number;
  // 禁用鼠标悬停时的高亮
  @Input() disabledHover: boolean = true;
  // 是否支持高亮选中的行，即单选
  @Input() highlightRow: boolean = false;
  @Input() tableSize: string = 'default';

  @Output() onCurrentChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onSelectCancel = new EventEmitter();
  @Output() onSelectAll = new EventEmitter();
  @Output() onSelectChange = new EventEmitter();
  @Output() onSortChange = new EventEmitter();
  @Output() onRowClick = new EventEmitter();

  cloneColumns;

  checkboxSelection = [];
  checked: boolean = false;

  @ViewChild('fixedTopCell') _fixedTopCell: ElementRef;
  private cells = [];

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.height) return;
    const ths = this._fixedTopCell.nativeElement.children[0].children;

    setTimeout(() => {
      for (const th of ths) {
        this.cells.push({
          width: th.offsetWidth,
          height: th.offsetHeight
        });
      }
      this.border = true;
    });
  }

  fixedRightTableStyle() {
    let style = {};
    let width = 0;
    let rightFixedColumns = this.rightFixedColumns();
    rightFixedColumns.forEach((col) => {
      if (col.fixed && col.fixed === 'right') width += col._width;
    });
    // width += this.scrollBarWidth;
    return {
      width: `${width}px`
    };
  }

  leftFixedColumns() {
    let left = [];
    let other = [];
    this.cloneColumns.forEach((col) => {
      if (col.fixed && col.fixed === 'left') {
        left.push(col);
      } else {
        other.push(col);
      }
    });
    return left;
  }

  rightFixedColumns() {
    let right = [];
    let other = [];
    this.cloneColumns.forEach((col) => {
      if (col.fixed && col.fixed === 'right') {
        right.push(col);
      } else {
        other.push(col);
      }
    });
    return right;
  }

  isLeftFixed() {
    return this.columns.some(col => col.fixed && col.fixed === 'left');
  }

  isRightFixed() {
    return this.columns.some(col => col.fixed && col.fixed === 'right');
  }

  onRowClickTrigger(row) {
    this.onRowClick.emit(row);
  }

  onCheckBoxTrigger($event, row) {
    if ($event.checked) {
      this.checkboxSelection.push(row);
    } else {
      this.checkboxSelection = this.checkboxSelection.filter((source) => source !== row);
    }
    this.onSelectChange.emit(this.checkboxSelection);
  }

  onCheckBoxAllTrigger($event) {
    if ($event.checked) {
      this.checkboxSelection = this.data;
    } else {
      this.checkboxSelection = [];
    }

    this.onSelectAll.emit(this.checkboxSelection);
  }
}
