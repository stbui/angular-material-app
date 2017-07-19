import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() data;
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
  @Input() highlightRow:boolean = false;

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

  rows = [];

  constructor() {

    const d = [
      {id: '1', name: "李彦龙"},
      {id: '2', name: "郁梦寒"},
      {id: '3', name: "亥夏真"},
      {id: '4', name: "汗水凡"},
      {id: '5', name: "歧骏桀"},
      {id: '6', name: "潜云溪"},
      {id: '7', name: "无夜春"},
      {id: '6', name: "鄂叶彤"},
      {id: '8', name: "鲁文彬"},
      {id: '9', name: "寻涵阳"},
      {id: '10', name: "董晨风"},
      {id: '11', name: "蒙白梅"},
      {id: '12', name: "纪沛春"}
    ];
    this.rows = d;

  }

}
