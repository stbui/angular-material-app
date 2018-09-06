import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeAgoPipe, TruncatePipe],
  exports: [TimeAgoPipe, TruncatePipe]
})
export class CoreModule {}
