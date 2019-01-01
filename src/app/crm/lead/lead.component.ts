import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { NewComponent } from './new/new.component';
import { LeadService } from './lead.service';

@Component({
  selector: 'crm-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'name',
    'company',
    'tel',
    'phone',
    'status_mapped',
    'lastest_revisit_log',
    'real_revisit_at',
    'revisit_remind_at',
    'star'
  ];

  dataSource: any = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: LeadService, private dialog: MatDialog) {}

  ngOnInit() {
    this.service.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }

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

  rowSelection(row, event) {
    this.selection.toggle(row);
  }

  onNew(event) {
    let dialogRef = this.dialog.open(NewComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onEditorTriggered(item) {
    console.log(item);
    let dialogRef = this.dialog.open(NewComponent, {
      width: '500px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDeleteTriggered() {
    console.log(this.selection.selected);
    // this.service.delete(this.selection.selected);
  }
}
