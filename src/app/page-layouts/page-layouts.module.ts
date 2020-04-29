import { NgModule } from '@angular/core';
import { SharedModule } from '../../@stbui/shared/shared.module';
import { PageLayoutsRoutingModule } from './pages.routing';
import { FullwidthComponent } from './carded/fullwidth/fullwidth.component';

import { Fullwidth2Component } from './carded/fullwidth2/fullwidth2.component';
import { DemoContentComponent } from './demo-content/demo-content.component';
import { LeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { LeftSidenavTabbedComponent } from './carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { RightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';

import { BaseLayoutModule, SidenavLayoutModule } from '../layouts';

@NgModule({
  imports: [
    SharedModule,
    PageLayoutsRoutingModule,
    BaseLayoutModule,
    SidenavLayoutModule
  ],
  declarations: [
    FullwidthComponent,
    Fullwidth2Component,
    DemoContentComponent,
    LeftSidenavComponent,
    LeftSidenavTabbedComponent,
    RightSidenavComponent
  ],
})
export class PageLayoutsModule { }
