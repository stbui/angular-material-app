import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      height: '50%',
      width: '60%'
    });
  }

}
