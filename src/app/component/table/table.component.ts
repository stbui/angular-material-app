import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'stbui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
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

  @Output() onCurrentChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onSelectCancel = new EventEmitter();
  @Output() onSelectAll = new EventEmitter();
  @Output() onSelectChange = new EventEmitter();
  @Output() onSortChange = new EventEmitter();
  @Output() onRowClick = new EventEmitter();
  @Output() onRowDbClick = new EventEmitter();
  @Output() onExpand = new EventEmitter();

  @ViewChild('tableBody') tableBody: ElementRef;
  @ViewChild('header') header: ElementRef;
  @ViewChild('table') table: ElementRef;

  tableCondensed = false;
  tableHover = true;
  isSelectAll = false;

  columnsWidth = [];
  prefixCls = 'stbui-';
  tableWidth = 0;
  cloneColumns;
  objData;
  columnKey = 1;
  bodyHeight = 0;
  scrollBarWidth = 0;


  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.cloneColumns = this.makeColumns();
    this.objData = this.makeObjData();

    this.columnsWidth = [
      { width: 100 },
      { width: 100 },
      { width: 100 },
      { width: 100 },
      { width: 200 },
      { width: 100 },
      { width: 120 }
    ]
  }

  ngAfterViewInit() {
    // let columnsWidth = [];
    // if (this.data.length) {
    //   const nativeElement = this.tableBody.nativeElement;
    //   const table = nativeElement.querySelectorAll('table');
    //   const tr = table[0].querySelectorAll('tbody tr');
    //   const td = tr[0].querySelectorAll('td');
    //
    //   for (let i = 0; i < td.length; i++) {
    //     const width = document.defaultView.getComputedStyle(td[i], '').width;
    //     columnsWidth.push({
    //       width: parseInt(width)
    //     });
    //   }
    //   this.columnsWidth = columnsWidth;
    // }
  }

  styles() {
    let style = {};
    // if (this.height) {
    //   style['height'] = `${this.height}px`;
    // }

    if (this.width) {
      style['width'] = `${this.width}px`;
    }

    return style;
  }

  tableStyle() {
    const allWidth = !this.columns.some(cell => !cell.width);

    if (allWidth) {
      this.tableWidth = this.columns.map(cell => cell.width).reduce((a, b) => a + b);
    } else {
      const $element = this.table.nativeElement;
      const width = document.defaultView.getComputedStyle($element, '').width;
      this.tableWidth = parseInt(width);
    }

    return {
      width: `${this.tableWidth}px`
    }
  }

  bodyStyle() {
    return {
      height: `${this.height}px`
    }
  }

  fixedHeader() {

  }

  fixedBodyStyle() {
    let height = 0;
    return {
      height: `${height}px`
    };
  }

  fixedTableStyle() {
    let style = {};
    let width = 0;
    let leftFixedColumns = this.leftFixedColumns();
    leftFixedColumns.forEach((col) => {
      if (col.fixed && col.fixed === 'left') width += col._width;
    });

    return {
      width: `${width}px`
    };
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

  onCheckedChange() {
    const status = !this.isSelectAll;

    this.isSelectAll = status;
  }

  selectAll(status) {

  }

  isLeftFixed() {
    return this.columns.some(col => col.fixed && col.fixed === 'left');
  }

  isRightFixed() {
    return this.columns.some(col => col.fixed && col.fixed === 'right');
  }

  handleBodyScroll(event) {
    if (this.isLeftFixed) {
      this.header.nativeElement.scrollLeft = event.target.scrollLeft;
    }

  }

  makeColumns() {
    let columns = this.columns;
    let left = [];
    let center = [];
    let right = [];

    columns.forEach((column, index) => {
      column._index = index;
      column._columnKey = this.columnKey++;
      column._width = column.width ? column.width : '';

      if (column.fixed && column.fixed === 'left') {
        left.push(column);
      } else if (column.fixed && column.fixed === 'right') {
        right.push(column);
      } else {
        center.push(column);
      }
    });

    return left.concat(center).concat(right);
  }

  makeObjData() {
    let data = {};
    this.data.forEach((row, index) => {
      const newRow = row;
      newRow._isHover = false;
      if (newRow._disabled) {
        newRow._isDisabled = newRow._disabled;
      } else {
        newRow._isDisabled = false;
      }
      if (newRow._checked) {
        newRow._isChecked = newRow._checked;
      } else {
        newRow._isChecked = false;
      }
     
      data[index] = newRow;
    });
    return data;
  }

}
