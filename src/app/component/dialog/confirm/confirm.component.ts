/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stbui-dialog-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  title: string;
  message: string;
  cancelButton: string = '取消';
  acceptButton: string = '确定';

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>) {}

  cancel(): void {
    this.dialogRef.close(false);
  }

  accept(): void {
    this.dialogRef.close(true);
  }
}
