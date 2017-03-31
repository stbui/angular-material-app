import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogsComponent, {
      height: '50%',
      width: '60%'
    });
  }

}
