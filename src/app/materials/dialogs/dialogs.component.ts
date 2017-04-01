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


// @Component({
//   selector: 'stbui-demo-dialog',
//   template: `
//     <h1>test</h1>
//
//     <md-dialog-actions align="end">
//       <button md-button (click)="dialogRef.close('No!')">No</button>
//       <button md-button color="primary" (click)="dialogRef.close('Yes!')">Yes</button>
//     </md-dialog-actions>
//   `
// })
// export class DemoDialog {
//   constructor(public dialogRef: MdDialogRef<DemoDialog>) { }
// }
