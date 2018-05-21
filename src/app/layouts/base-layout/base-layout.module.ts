/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseLayoutComponent,
  BaseLayoutHeaderComponent
} from './base-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BaseLayoutComponent, BaseLayoutHeaderComponent],
  exports: [BaseLayoutComponent, BaseLayoutHeaderComponent]
})
export class BaseLayoutModule {}
