import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TagSelectComponent } from './tag-select.component';

@NgModule({
  imports: [CommonModule, MatRippleModule, MatIconModule],
  declarations: [TagSelectComponent],
  exports: [TagSelectComponent]
})
export class TagSelectModule {}
