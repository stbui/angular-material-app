import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ContactService } from './contact.service';

@Component({
  selector: 'crm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'name',
    'phone',
    'relation',
    'company',
    'mail',
    'star'
  ];

  dataSource: any = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ContactService, private dialog: MatDialog) {}

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
    this.onUpdateContact(row);
  }

  onNew(event) {
    let dialogRef = this.dialog.open(ContactUpdateComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onEditorTriggered(item) {
    console.log(item);
    let dialogRef = this.dialog.open(ContactUpdateComponent, {
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

  onUpdateContact(contact) {
    const dialogRef = this.dialog.open(ContactUpdateComponent, {
      width: '400px',
      panelClass: 'contact-dialog-form',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'crm-contact-upate',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUpdateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
