/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  SidenavLayoutComponent,
  SidenavLayoutContentComponent,
  SidenavLayoutHeaderComponent,
  SidenavLayoutSideComponent,
  SidenavLayoutToolbarComponent
} from './sidenav-layout.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [
    SidenavLayoutComponent,
    SidenavLayoutContentComponent,
    SidenavLayoutHeaderComponent,
    SidenavLayoutSideComponent,
    SidenavLayoutToolbarComponent
  ],
  exports: [
    SidenavLayoutComponent,
    SidenavLayoutContentComponent,
    SidenavLayoutHeaderComponent,
    SidenavLayoutSideComponent,
    SidenavLayoutToolbarComponent
  ]
})
export class SidenavLayoutModule {}
