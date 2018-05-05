import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatIconModule } from '@angular/material';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule, MatRippleModule, MatIconModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent]
})
export class PaginationModule {}
