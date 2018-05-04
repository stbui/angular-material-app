/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverComponent, PopoverDirective],
  exports: [PopoverComponent, PopoverDirective],
  entryComponents: [PopoverComponent]
})
export class PopoverModule {}
