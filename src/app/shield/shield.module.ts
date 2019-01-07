import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { BrandModule } from '../admin';
import { NavigationModule } from '../component/navigation';
import { NavigationService } from './layout/navigation.service';

import { ShieldRoutingModule } from './shield-routing.module';
import { ShieldComponent } from './shield.component';

import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrandModule,
    NavigationModule,
    ShieldRoutingModule,
    LandingModule,
    DashboardModule
  ],
  declarations: [LayoutComponent, ShieldComponent],
  providers: [NavigationService]
})
export class ShieldModule {}
