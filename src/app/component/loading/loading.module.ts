import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { LoadingComponent } from './loading.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [LoadingComponent, SkeletonComponent],
  exports: [LoadingComponent, SkeletonComponent]
})
export class LoadingModule {}
