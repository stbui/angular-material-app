import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {

  columns = ['姓名', '公司名称', '电话', '手机', '', ''];

  checkedAll;
  currentChecked = [];  // 保存选中的数据id
  checkednum = 0;
  pageTotal;
  pageSize = 5;
  currentPage = 1;

  tableData;

  constructor(@Inject('dataTableService') private service) {
    this.service.select();

    this.pageTotal = Math.ceil(this.service.count() / this.pageSize);
    this.renderTable();
  }

  ngOnInit() {
  }

  /*
   * 搜索事件
   * */
  onSearch(value) {
    if (value == '') {
      this.tableData = this.service.data;
      return;
    }

    // 过滤出需要显示的数据
    this.tableData = this.tableData.filter((v) => {
      if (v.name.indexOf(value) !== -1) {
        return v;
      }
    });
  }

  // 选中使用事件
  onCheckedAllChange($event) {
    if ($event.checked) {
      console.log(this.checkedAll, $event);
    }
  }

  // 选中项事件
  onCheckedChange($event) {
    console.log($event.source.id, $event);
    if ($event.checked) {
      this.currentChecked.push($event.source.id);
      this.checkednum++;
    } else {
      this.checkednum--;
    }
  }

  // 单条删除
  onDelete(item) {
    this.service.delete(item);
    this.tableData = this.service.data;
  }

  // 多选删除
  onMultiDelete() {
    if (this.currentChecked.length === 0) {
      console.log('没有选择', this.currentChecked);
      return;
    }

    this.currentChecked.forEach((x) => {
      this.onDelete({id: x});
    });
    this.currentChecked = [];

    // 重新渲染table数据
    // 重新计算分页
  }


  // table 数据渲染
  renderTable() {
    // this.tableData = this.service.data;
    this.tableData = this.service.data.filter((v, k) => {
      const page = Math.floor(k / this.pageSize);
      if (page === this.currentPage - 1) {
        return v
      }
    });
  }

  // 分页事件
  onPage($event) {
    this.currentPage = $event;
    this.renderTable();
  }
}
