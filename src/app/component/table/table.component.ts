import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

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

  @Output() onCurrentChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onSelectCancel = new EventEmitter();
  @Output() onSelectAll = new EventEmitter();
  @Output() onSelectChange = new EventEmitter();
  @Output() onSortChange = new EventEmitter();
  @Output() onRowClick = new EventEmitter();
  @Output() onRowDbClick = new EventEmitter();
  @Output() onExpand = new EventEmitter();

  tableCondensed = false;
  tableHover = true;
  isSelectAll = false;


  constructor() {

  }

  styles() {
    return {
      height: `${this.height}px`,
      'overflow-y': 'scroll'
    }
  }

  onCheckedChange() {
    const status = !this.isSelectAll;

    this.isSelectAll = status;
  }

  selectAll(status) {

  }

}
