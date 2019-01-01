import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'key',
    'username',
    'nickname',
    'role',
    'email',
    'phone',
    'createTime',
    'status',
    'star'
  ];

  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUserList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
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

  onAddTriggered() {}
  onEditorTriggered(user) {
    console.log(user)
  }

  onDeleteTriggered() {
    console.log(this.selection.selected);
    this.service.delete(this.selection.selected);
  }
}
