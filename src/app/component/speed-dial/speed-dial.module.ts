/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialComponent } from './speed-dial.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [SpeedDialComponent],
  exports: [SpeedDialComponent]
})
export class SpeedDialModule {}
