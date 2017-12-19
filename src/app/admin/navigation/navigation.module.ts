import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatRippleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    RouterModule
  ],
  declarations: [NavigationComponent, NavCollapseComponent, NavItemComponent],
  providers: [NavigationService],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
