import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullwidthComponent } from './carded/fullwidth/fullwidth.component';

const routes: Routes = [
  {
    path: '',
    component: FullwidthComponent
  },
  {
    path: 'carded/full-width',
    component: FullwidthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageLayoutsRoutingModule {
}
