import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ScrollbarModule } from '../shared/scrollbar/scrollbar.module';

import { NavigationComponent } from './navigation.component';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
    ScrollbarModule
  ],
  declarations: [NavigationComponent, NavCollapseComponent, NavItemComponent],
  providers: [
    NavigationService,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
