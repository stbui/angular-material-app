import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { BrandComponent } from './brand.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [BrandComponent],
  exports: [BrandComponent]
})
export class BrandModule {}
