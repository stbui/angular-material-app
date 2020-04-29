import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../@stbui/shared';
import { BrandModule } from '../../@stbui/admin';
import { NavigationModule } from '../../@stbui/navigation';

import { LayoutComponent } from './layout/layout.component';
import { NavigationService } from './layout/navigation.service';

import { ShieldRoutingModule } from './shield-routing.module';
import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShieldComponent } from './shield.component';

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
export class ShieldModule { }
