/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseLayoutComponent,
  BaseLayoutHeaderComponent,
  BaseLayoutContentComponent
} from './base-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BaseLayoutComponent, BaseLayoutHeaderComponent, BaseLayoutContentComponent],
  exports: [BaseLayoutComponent, BaseLayoutHeaderComponent, BaseLayoutContentComponent]
})
export class BaseLayoutModule {}
