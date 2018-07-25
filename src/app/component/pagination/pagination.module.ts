/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule, MatRippleModule, MatIconModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent]
})
export class PaginationModule {}
