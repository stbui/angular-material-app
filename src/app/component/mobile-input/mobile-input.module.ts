import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileInputComponent } from './mobile-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MobileInputComponent],
  exports: [MobileInputComponent]
})
export class MobileInputModule {}
