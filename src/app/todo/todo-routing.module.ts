import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { TodoComponent } from './todo.component';

const routers: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path: 'apps/todo/:filter',
        component: TodoComponent
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
