import { Component, OnInit, Inject } from '@angular/core';

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


  //
  columnsDemo;

  constructor(@Inject('dataTableService') private service) {
    this.service.select();

    this.pageTotal = Math.ceil(this.service.count() / this.pageSize);
    this.renderTable();


    this.columnsDemo = {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    };
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
