import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { ComposeComponent } from './compose/compose.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  allMails;
  shownMails;

  constructor(
    public composeDialog: MdDialog,
    private snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.setShownMailsByGroup();
  }

  setShownMailsByGroup() {
    this.shownMails = [
      {
        "from": {
          "name": "Mccormick Hinton",
          "mail": "demo@justademomail.com"
        },
        "subject": "est cillum magna",
        "content": "Sint eiusmod pariatur veniam esse dolor exercitation in cillum sunt proident anim. Amet sunt amet incididunt ad enim sit culpa dolor velit veniam elit in nulla. Ad aliqua ut do sint nulla quis velit. Nisi ullamco do occaecat culpa. Ut duis enim cillum eiusmod magna nisi esse pariatur veniam mollit esse esse nulla. Ad excepteur ipsum ut cupidatat eu ad aliquip ullamco deserunt. Esse fugiat magna ut non ex proident eiusmod consectetur ea pariatur.\n\nUllamco nulla eu esse do ut. Laborum officia eu amet laborum velit mollit exercitation. Anim veniam eiusmod est consectetur deserunt. Minim voluptate id in quis voluptate ut do incididunt consectetur fugiat consequat elit pariatur. Culpa in occaecat ipsum nulla.\n\nDo labore magna esse laboris enim minim ea cupidatat nisi in. Enim ullamco reprehenderit deserunt in dolore voluptate exercitation consectetur adipisicing pariatur. Nulla ad et sint est laborum. Non exercitation ea cupidatat do laborum nostrud. Enim elit officia nostrud voluptate nostrud reprehenderit.",
        "when": 1,
        "read": true,
        "starred": true,
        "labels": [
          {
            "name": "Private",
            "color": "darkgrey"
          }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
      }
    ];
  }

  openComposeDialog() {
    let dialogRef = this.composeDialog.open(ComposeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.snackBar.open(result);
    });
  }

}
