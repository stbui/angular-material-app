/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseLayoutComponent,
  BaseLayoutHeaderComponent,
  BaseLayoutToolbarComponent,
  BaseLayoutContentComponent
} from './base-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BaseLayoutComponent,
    BaseLayoutHeaderComponent,
    BaseLayoutToolbarComponent,
    BaseLayoutContentComponent
  ],
  exports: [
    BaseLayoutComponent,
    BaseLayoutHeaderComponent,
    BaseLayoutToolbarComponent,
    BaseLayoutContentComponent
  ]
})
export class BaseLayoutModule {}
