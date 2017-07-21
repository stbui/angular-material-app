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
export class TableComponent implements OnInit{

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

  tableCondensed = false;
  tableHover = true;
  isSelectAll = false;

  columnsWidth = [];

  prefixCls = 'stbui-';


  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {

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
    return {
      width: `${this.width}px`
    }
  }

  bodyStyle() {
    return {
      height: `${this.height}px`
    }
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

}
