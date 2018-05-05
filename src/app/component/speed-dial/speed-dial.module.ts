/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialComponent } from './speed-dial.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [SpeedDialComponent],
  exports: [SpeedDialComponent]
})
export class SpeedDialModule {}
