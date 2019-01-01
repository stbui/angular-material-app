import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ScriptService } from './script.service';
import userAgent from './user-agent';

@Component({
  selector: 'apm-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'releaseStage',
    'name',
    'lineNumber',
    'columnNumber',
    'file',
    'message',
    'cb'
  ];

  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  openDetail: boolean = false;

  detailColumns: string[] = ['name', 'value'];
  eventDataSource = [
    {
      name: '时间',
      value: ''
    },
    {
      name: '错误类型',
      value: ''
    },
    {
      name: '错误信息',
      value: ''
    },
    {
      name: '出错文件',
      value: ''
    },
    {
      name: '出错行号',
      value: ''
    },
    {
      name: '出错列号',
      value: ''
    },
    {
      name: '错误详情',
      value: ''
    },
    {
      name: 'metaData[script][content]',
      value: ''
    },
    {
      name: 'metaData[script][src]',
      value: ''
    }
  ];
  devicesDataSource = [
    {
      name: 'IP',
      value: ''
    },
    {
      name: '浏览器',
      value: ''
    },
    {
      name: 'OS',
      value: ''
    },
    {
      name: 'language',
      value: ''
    },
    {
      name: 'userAgent',
      value: ''
    }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ScriptService) {}

  ngOnInit() {
    this.service.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onClickOutside(e) {
    this.openDetail = false;
  }

  //
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

  rowSelection(row) {
    this.selection.toggle(row);
    this.openDetail = true;
  }

  onOpenedTriggered(opened) {
    this.openDetail = opened;
    console.log(this.selection.selected);
    this.eventDataSource = [
      {
        name: '时间',
        value: '1234'
      },
      {
        name: '错误类型',
        value: ''
      },
      {
        name: '错误信息',
        value: ''
      },
      {
        name: '出错文件',
        value: ''
      },
      {
        name: '出错行号',
        value: ''
      },
      {
        name: '出错列号',
        value: ''
      },
      {
        name: '错误详情',
        value: ''
      },
      {
        name: 'metaData[script][content]',
        value: ''
      },
      {
        name: 'metaData[script][src]',
        value: ''
      }
    ];
  }

  onSearchTriggered(value) {
    console.log(value);
  }
}
