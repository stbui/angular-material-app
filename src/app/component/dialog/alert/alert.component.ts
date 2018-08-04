/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stbui-dialog-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  title: string;
  message: string;
  closeButton: string = '关闭';

  constructor(private dialogRef: MatDialogRef<AlertComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
