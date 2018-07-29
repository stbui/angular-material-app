/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class MessageModule {}
