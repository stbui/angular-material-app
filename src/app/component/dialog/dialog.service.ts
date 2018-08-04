/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig
} from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

import {
  DialogConfigInterface,
  AlertConfigInterface,
  ConfirmInterface
} from './dialog.config';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  open<T>(
    component: ComponentType<T>,
    config: MatDialogConfig
  ): MatDialogRef<T> {
    return this.dialog.open(component, config);
  }

  closeAll(): void {
    this.dialog.closeAll();
  }

  alert(config: AlertConfigInterface): MatDialogRef<AlertComponent> {
    let dialogConfig: MatDialogConfig = this._config(config);
    let dialogRef = this.dialog.open(AlertComponent, dialogConfig);
    let alertComponentInstance = dialogRef.componentInstance;
    alertComponentInstance.title = config.title;
    alertComponentInstance.message = config.message;
    if (config.closeButton) {
      alertComponentInstance.closeButton = config.closeButton;
    }

    return dialogRef;
  }

  confirm(config: ConfirmInterface): MatDialogRef<ConfirmComponent> {
    let dialogConfig: MatDialogConfig = this._config(config);
    let dialogRef = this.dialog.open(ConfirmComponent, dialogConfig);
    let ConfirmComponentInstance = dialogRef.componentInstance;
    ConfirmComponentInstance.title = config.title;
    ConfirmComponentInstance.message = config.message;

    if (config.acceptButton) {
      ConfirmComponentInstance.acceptButton = config.acceptButton;
    }
    if (config.cancelButton) {
      ConfirmComponentInstance.cancelButton = config.cancelButton;
    }

    return dialogRef;
  }

  private _config(config: DialogConfigInterface): MatDialogConfig {
    let dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    Object.assign(dialogConfig, config);
    return dialogConfig;
  }
}
