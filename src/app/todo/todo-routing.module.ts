import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { TodoComponent } from './todo.component';

const routers: Routes = [
  {
    path: 'apps',
    component: AdminComponent,
    children: [
      {
        path: 'todo/:filter',
        component: TodoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {
}
