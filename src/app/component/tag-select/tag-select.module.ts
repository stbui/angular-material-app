import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatIconModule } from '@angular/material';
import { TagSelectComponent } from './tag-select.component';

@NgModule({
  imports: [CommonModule, MatRippleModule, MatIconModule],
  declarations: [TagSelectComponent],
  exports: [TagSelectComponent]
})
export class TagSelectModule {}
