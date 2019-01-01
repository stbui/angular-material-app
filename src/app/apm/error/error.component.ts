import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'firstSeen',
    'src',
    'type',
    'releaseStages',
    'star'
  ];

  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  openDetail: boolean = false;

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside && this.openDetail === true) {
      this.openDetail = false;
    }
  }

  constructor(private _elementRef: ElementRef, private service: ErrorService) {}

  ngOnInit() {
    this.service.getList().subscribe(res => {
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

  rowSelection(row, event) {
    this.selection.toggle(row);
    this.openDetail = true;
  }

  onOpenedTriggered(opened) {
    this.openDetail = opened;
  }

  onSearchTriggered(value) {
    console.log(value);
  }
}
