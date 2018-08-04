/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import {
  DialogComponent,
  DialogTitleDirective,
  DialogContentDirective,
  DialogActionsDirective
} from './dialog.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [
    DialogComponent,
    DialogTitleDirective,
    DialogContentDirective,
    DialogActionsDirective,
    AlertComponent,
    ConfirmComponent
  ],
  entryComponents: [AlertComponent, ConfirmComponent],
  exports: [AlertComponent],
  providers: [DialogService]
})
export class DialogModule {}
