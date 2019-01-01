import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { BrandModule } from '../../admin';
import { NavigationModule } from '../../component/navigation';

import { LayoutComponent } from './layout.component';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [CommonModule, SharedModule, BrandModule, NavigationModule],
  declarations: [LayoutComponent],
  providers: [NavigationService]
})
export class LayoutModule {}
