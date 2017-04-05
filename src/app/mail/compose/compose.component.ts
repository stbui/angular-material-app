import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  mail;
  name;
  address = 'stbui@stbui.com';
  subject;
  content;

  constructor(
    private dialogRef: MdDialogRef<ComposeComponent>
  ) { }

  ngOnInit() {
  }

  send() {
    this.mail = {
      from: {
        name: this.name,
        mail: this.address
      },
      subject: this.subject,
      content: this.content
    }

    console.log(this.mail,  this.name,this.subject)
    this.dialogRef.close(this.mail);
  }
}
