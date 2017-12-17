import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseLayoutComponent],
  exports: [BaseLayoutComponent]
})
export class BaseLayoutModule { }
