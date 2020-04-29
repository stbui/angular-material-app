import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollbarDirective } from './scrollbar.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollbarDirective
  ],
  exports: [
    ScrollbarDirective
  ]
})
export class ScrollbarModule {
}
