import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatRippleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavigationService } from './navigation.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
    PerfectScrollbarModule
  ],
  declarations: [NavigationComponent, NavCollapseComponent, NavItemComponent],
  providers: [
    NavigationService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
