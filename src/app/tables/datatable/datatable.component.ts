import { Component, OnInit, Inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  age: number;
  address: string;
  province: string;
  city: string;
  zip: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: '王小明',
    age: 18,
    address: '北京市朝阳区芍药居',
    province: '北京市',
    city: '朝阳区',
    zip: 100000
  },
  {
    name: '张小刚',
    age: 25,
    address: '北京市海淀区西二旗',
    province: '北京市',
    city: '海淀区',
    zip: 100000
  },
  {
    name: '李小红',
    age: 30,
    address: '上海市浦东新区世纪大道',
    province: '上海市',
    city: '浦东新区',
    zip: 100000
  },
  {
    name: '周小伟',
    age: 26,
    address: '深圳市南山区深南大道',
    province: '广东',
    city: '南山区',
    zip: 100000
  },
  {
    name: '李小红',
    age: 30,
    address: '上海市浦东新区世纪大道',
    province: '上海市',
    city: '浦东新区',
    zip: 100000
  },
  {
    name: '周小伟',
    age: 26,
    address: '深圳市南山区深南大道',
    province: '广东',
    city: '南山区',
    zip: 100000
  }
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'name',
    'age',
    'address',
    'province',
    'city',
    'zip'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() {}

  ngOnInit() {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
