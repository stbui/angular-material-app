import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {

  currentPage = 1;

  data;
  selectData;
  num = 0;

  constructor(@Inject('LeadService') private _service) {

  }

  ngOnInit() {
    // this.select();
    this.renderTable();

    this._service.getLead().then(res => {
      console.log(res)
    });
  }


  select() {
    this.data = {
      columns: [
        {key: 'id', title: 'id', type: 'selection'},
        {key: 'name', title: '姓名'},
        {key: 'name', title: '公司名称'},
        {key: 'name', title: '电话'},
      ],
      data: []
    };


    return this.data;
  }

  count() {
  }

  /*
   * 搜索事件
   * */
  onSearch(value) {

  }

  onSelect($event) {

  }

  onDelete() {
  }


  // table 数据渲染
  renderTable() {

  }

  // 分页事件
  onPage($event) {

  }

  getPageTotal() {
  }

}
