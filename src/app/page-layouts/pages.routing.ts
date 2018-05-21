import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullwidthComponent } from './carded/fullwidth/fullwidth.component';
import { Fullwidth2Component } from './carded/fullwidth2/fullwidth2.component';
import { LeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { LeftSidenavTabbedComponent } from './carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { RightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: FullwidthComponent
  },
  {
    path: 'carded/full-width',
    component: FullwidthComponent
  },
  {
    path: 'carded/full-width-2',
    component: Fullwidth2Component
  },
  {
    path: 'carded/left-sidenav',
    component: LeftSidenavComponent
  },
  {
    path: 'carded/left-sidenav-tabbed',
    component: LeftSidenavTabbedComponent
  },
  {
    path: 'carded/right-sidenav',
    component: RightSidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutsRoutingModule {}
