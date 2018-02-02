import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { CountDownComponent } from './count-down.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [CountDownComponent],
  exports: [CountDownComponent]
})
export class CountDownModule {}
