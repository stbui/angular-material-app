import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrandComponent } from './brand.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [BrandComponent],
  exports: [BrandComponent]
})
export class BrandModule {}
