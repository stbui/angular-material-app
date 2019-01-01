import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-mail-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'star', 'name', 'subject', 'when'];
  dataSource: any = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  @Input()
  set mails(val) {
    this.dataSource = new MatTableDataSource(val);
  }
  @Output() onOpenMailDetial = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  rowSelection(row) {
    console.log(row);
    this.onOpenMailDetial.emit(row);
  }
}
