import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { NavigationComponent } from './navigation.component';

const routers: Routes = [
  {
    path:'apps',
    component: AdminComponent,
    children: [
      {
        path: 'navigation',
        component: NavigationComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routers, {useHash: true}) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
