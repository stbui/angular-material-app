import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageLayoutsRoutingModule } from './pages.routing';
import { FullwidthComponent } from './carded/fullwidth/fullwidth.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Fullwidth2Component } from './carded/fullwidth2/fullwidth2.component';
import { DemoContentComponent } from './demo-content/demo-content.component';
import { LeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { LeftSidenavTabbedComponent } from './carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { RightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';

import { BaseLayoutModule } from '../layouts';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    SharedModule,
    PageLayoutsRoutingModule,
    PerfectScrollbarModule,
    BaseLayoutModule
  ],
  declarations: [
    FullwidthComponent,
    Fullwidth2Component,
    DemoContentComponent,
    LeftSidenavComponent,
    LeftSidenavTabbedComponent,
    RightSidenavComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PageLayoutsModule {}
