/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  BaseLayoutComponent,
  BaseLayoutHeaderComponent,
  BaseLayoutToolbarComponent,
  BaseLayoutContentComponent
} from './base-layout.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
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
