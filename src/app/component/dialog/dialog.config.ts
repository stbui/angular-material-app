/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { MatDialogConfig } from '@angular/material/dialog';

export interface DialogConfigInterface extends MatDialogConfig {
  title?: string;
  message?: string;
}

export interface AlertConfigInterface extends DialogConfigInterface {
  closeButton?: string;
}

export interface ConfirmInterface extends DialogConfigInterface {
  acceptButton?: string;
  cancelButton?: string;
}
