import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

export const routes: Routes = [
  {
    path: 'apps/todo/:filter',
    component: TodoComponent
  }
];
export const routing = RouterModule.forChild(routes);
