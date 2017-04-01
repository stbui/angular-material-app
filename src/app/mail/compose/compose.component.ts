import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  constructor(
    private dialogRef: MdDialogRef<ComposeComponent>
  ) { }

  ngOnInit() {
  }

  send() {
    this.dialogRef.close('邮件已发送');
  }
}
