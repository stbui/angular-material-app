import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, NavCollapseComponent, NavItemComponent]
})
export class NavigationModule { }
