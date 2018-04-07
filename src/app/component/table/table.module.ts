/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule {}
